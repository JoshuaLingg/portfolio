"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const Form = ({}) => {
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({
    name: '',
    message: '',
  })

  const createFeedback = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/feedback/new', 
      {
        method: 'POST',
        body: JSON.stringify({
          name: feedback.name,
          message: feedback.message
        })
      })

      if (response.ok) {

      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="my-16 mx-8">
      <h1 className='text-center text-5xl pb-4'>Contact Me</h1>
      <form
        onSubmit={createFeedback}
      >
        <label>
          <span className="text-2xl">Your Name</span>
          <input 
            value={feedback.name}
            onChange={(e) => setFeedback({
              ...feedback, 
              name: e.target.value
            })}
            placeholder="How should I address you?"
            required
            className="w-full flex rounded-lg mt-2 mb-3 p-3 text-sm text-gray-500 outline-0"
          />
        </label>

        <label>
          <span className="text-2xl">Message</span>
          <textarea 
            value={feedback.message}
            onChange={(e) => setFeedback({
              ...feedback, 
              message: e.target.value
            })}
            placeholder="What would you like me to know?"
            required
            className="w-full flex rounded-lg h-[200px] mt-2 mb-3 p-3 text-sm text-gray-500 outline-0"
          />
        </label>
        
        <button
          type="submit"
          disabled={submitting}
          className="text-3xl bg-gray-300 hover:bg-green-300 block mt-10 mx-auto p-3 rounded-2xl border-[3px] border-zinc-500 mx-auto"
        >
          {submitting ? 'sending feedback...' : 'submit'}
        </button>
      </form>
    </div>
  )
}

export default Form