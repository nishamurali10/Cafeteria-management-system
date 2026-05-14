import { Controller } from "@hotwired/stimulus";
import { get } from "@rails/request.js";

// Connects to data-controller="order"
export default class extends Controller {
  static targets = [
    "qty",
    "price",
    "amount",
    "food",
    "subtotal",
    "taxTotal",
    "saleTotal",
  ];

  connect() {
    if (this.hasFoodTarget) {
      this.amount();
      // this.subTotal();
      // this.totalTax();
      this.totalSale();
    }
  }

  selectTo(e) {
    e.preventDefault();
    let id = e.target.value;
    const { url, params } = e.target.dataset;
    this.element.src = url + params + id;
  }

  select(e) {
    e.preventDefault();

    this.foodTargets.every(async (food, foodIndex) => {
      let food_id = food.value;
      if (food_id) {
        const { price } = await this.getRate(food_id);
        this.priceTargets.forEach((r, priceIndex) => {
          if (foodIndex == priceIndex) {
            r.value = price;
          }
        });
        this.amount();
        // this.subTotal();
        // this.totalTax();
        this.totalSale();
      }
    });
  }

  async getRate(food_id) {
    const response = await get(`/foods/${food_id}/rate`);
    return await response.json;
  }

  amount() {
    this.priceTargets.forEach((r, priceIndex) => {
      this.qtyTargets.forEach((q, qtyIndex) => {
        this.amountTargets.forEach((a, amountIndex) => {
          if (priceIndex == qtyIndex && amountIndex == qtyIndex) {
            let qty = q.value;
            let price = r.value;
            let amount = qty * price;
            a.textContent = amount.toFixed(2);
          }
        });
      });
    });
  }

  subTotal() {
    const arr = new Array();
    this.amountTargets.forEach((a) => {
      arr.push(parseFloat(a.textContent));
    });
    const subTotal = arr.reduce((pv, cv) => pv + cv, 0);
    this.subtotalTarget.textContent = subTotal.toFixed(2);
  }

  totalTax() {
    const arr = new Array();
    this.amountTargets.forEach((a, amountIndex) => {
      this.taxTargets.forEach((t, taxIndex) => {
        if (taxIndex == amountIndex) {
          let amount = parseFloat(a.textContent);
          let tax = parseFloat(t.textContent.split("%")[0]) / 100;
          arr.push(amount * tax);
        }
      });
    });
    const taxTotal = arr.reduce((pv, cv) => pv + cv, 0);
    this.taxTotalTarget.textContent = taxTotal.toFixed(2);
  }

  totalSale() {
    const arr = new Array();
    this.amountTargets.forEach((a) => {
      arr.push(parseFloat(a.textContent));
    });
    const subValue = arr.reduce((pv, cv) => pv + cv, 0);
    const subTotal = subValue.toFixed(2);
    this.saleTotalTarget.textContent = subTotal;
  }

  update() {
    this.amount();
    this.totalSale();
  }
}
