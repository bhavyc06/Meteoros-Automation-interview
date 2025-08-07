// src/components/ModalForm.jsx
import { useForm } from 'react-hook-form';
import { submitForm } from '../services/api';
import { useNotify } from '../context/NotificationContext';

export default function ModalForm({ close }) {
  const { register, handleSubmit, reset } = useForm();
  const notify = useNotify();

  const onSubmit = async (data) => {
    await submitForm(data);
    notify('Thanks! We’ll be in touch.');
    reset();
    close();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-30">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-xl p-8 w-11/12 max-w-md shadow-lg space-y-4"
      >
        <h2 className="text-2xl font-semibold">Get in Touch</h2>

        {[
          { name: 'name',    label: 'Name',    type: 'text'  },
          { name: 'email',   label: 'Email',   type: 'email' },
          { name: 'phone',   label: 'Phone',   type: 'tel'   },
        ].map(({name,label,type}) => (
          <div key={name} className="flex flex-col">
            <label className="mb-1 font-medium">{label}</label>
            <input
              type={type}
              {...register(name,{ required: true })}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        ))}

        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={close}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
