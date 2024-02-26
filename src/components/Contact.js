import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const API_URL = "https://portfolio2-1-backend.vercel.app/";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailSent, setEmailSent] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_URL}send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Afficher la réponse du serveur dans la console

        if (data.success) {
          // Traiter le succès, par exemple, afficher un message de réussite
          console.log("Email envoyé avec succès");
          setEmailSent(true);
        } else if (data.error) {
          // Traiter l'erreur, par exemple, afficher un message d'erreur
          console.error("Erreur lors de l'envoi de l'e-mail");
          setEmailSent(false);
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la demande:", error);
      });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="py-16 h-screen flex items-center" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Entrer en contact
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Travaillons <br /> ensemble!
              </h2>
            </div>
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-xl flex flex-col gap-y-6 pb-10 mb-10 p-6 items-start"
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Votre nom"
            ></input>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Votre email"
            ></input>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Votre message"
            ></textarea>
            <button type="submit" className="btn btn-lg">
              Envoyer voter message
            </button>
            {emailSent && (
              <div className="alert alert-success mt-4 text-green-800 font-bold">
                E-mail envoyé avec succès!
              </div>
            )}

            {emailSent === false && (
              <div className="alert alert-error mt-4 text-red-500 font-bold">
                Erreur lors de l'envoi de l'e-mail. Veuillez réessayer.
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
