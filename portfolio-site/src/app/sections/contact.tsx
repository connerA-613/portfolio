'use client';
import React, { useState } from "react";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "", subject: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend or API
        fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        })
        .then(response => {
            if (!response.ok) {
                console.error('response not ok:', response.statusText);
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);

        // Reset form and set submitted state
        setForm({ name: "", email: "", message: "", subject: "" });
        // Optionally, you can show a success message or redirect the user
        console.log('Form submitted successfully');
        setSubmitted(true);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    // <-- Add missing closing brace for handleSubmit here
    }

    return (
        <section id="contact">
            <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
            {submitted ? (
                <p className="text-center">Thank you for reaching out! I&apos;ll get back to you soon.</p>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col justify-center align-center space-y-4 w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="col-span-1 mb-4">
                            <div className="flex flex-col mb-4">
                                <label htmlFor="name" className="mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="p-2 border rounded"
                                />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="email" className="mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="p-2 border rounded"
                                />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="subject" className="mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    required
                                    className="p-2 border rounded"
                                />
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col mb-4">
                            <label htmlFor="message" className="mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={8}
                                className="p-2 border rounded"
                            />
                        </div>
                    </div>
                    <button type="submit" className="bg-[var(--color-brand)] text-white px-4 py-2 rounded hover:bg-[var(--color-brand-dark)] cursor-pointer">
                        Send Message
                    </button>
                </form>
            )}
        </section>
    );
}

export default Contact;