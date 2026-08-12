"use client";

import { priceList } from "@/app/data/priceList";
import { motion } from "framer-motion";

export default function PriceList() {
  const formatNaira = (amount: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount);

  return (
    <section className="pricelist-section">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="pricelist-container"
      >
        <span className="pricelist-tag">Launch Pricing</span>
        <h2 className="pricelist-title">SPECIAL LAUNCH PRICES</h2>
        <p className="pricelist-subtitle">
          Get in early — launch prices won&rsquo;t last forever
        </p>

        <div className="pricelist-table-wrap">
          <table className="pricelist-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Regular</th>
                <th>Launch Price</th>
                <th>You Save</th>
              </tr>
            </thead>
            <tbody>
              {priceList.map((row, i) => (
                <motion.tr 
                  key={row.item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <td className="pricelist-item">{row.item}</td>
                  <td className="pricelist-regular">{formatNaira(row.regular)}</td>
                  <td className="pricelist-launch">{formatNaira(row.launch)}</td>
                  <td className="pricelist-save">
                    {formatNaira(row.regular - row.launch)}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <a
          href="https://wa.me/2347010302895"
          target="_blank"
          rel="noopener noreferrer"
          className="pricelist-cta"
        >
          Order Now on WhatsApp →
        </a>
      </motion.div>
    </section>
  );
}
