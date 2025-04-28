  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-[#2E4052] mb-8">Contact Me</h2>
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-[#2E4052] mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/50 text-[#2E4052] border border-[#2E4052]/20 focus:outline-none focus:border-[#2E4052]"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-[#2E4052] mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/50 text-[#2E4052] border border-[#2E4052]/20 focus:outline-none focus:border-[#2E4052]"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-[#2E4052] mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-white/50 text-[#2E4052] border border-[#2E4052]/20 focus:outline-none focus:border-[#2E4052]"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#2E4052] text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  ); 