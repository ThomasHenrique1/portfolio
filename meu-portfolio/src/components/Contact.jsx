const Contact = () => {
    return (
      <section className="min-h-screen p-10 bg-white">
        <h2 className="text-3xl font-bold mb-4">Contato</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Seu nome" className="w-full p-2 border border-gray-300 rounded" />
          <input type="email" placeholder="Seu e-mail" className="w-full p-2 border border-gray-300 rounded" />
          <textarea placeholder="Sua mensagem" className="w-full p-2 border border-gray-300 rounded"></textarea>
          <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">
            Enviar
          </button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  