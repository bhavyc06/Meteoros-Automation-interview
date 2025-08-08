import { useForm }    from 'react-hook-form';
import { submitForm } from '../services/api';
import { useNotify }  from '../context/NotificationContext';

export default function ModalForm({ close }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const notify = useNotify();

  const onSubmit = async (data) => {
    await submitForm(data);                   // ➜ POST /api/form
    notify('Thanks! We’ll be in touch.');     // ➜ toast bottom-right
    reset();
    close();
  };

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-11/12 max-w-md rounded-xl bg-white p-8 shadow-lg"
      >
        <h2 className="mb-4 text-2xl font-semibold">Get in Touch</h2>

        {/* ── Name ───────────────────────── */}
        <div className="mb-4 flex flex-col">
          <label className="mb-1 font-medium">Name</label>
          <input
            {...register('name', { required: true })}
            className="rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
          />
          {errors.name && (
            <span className="mt-1 text-sm text-red-600">Required</span>
          )}
        </div>

        {/* ── Email ──────────────────────── */}
        <div className="mb-4 flex flex-col">
          <label className="mb-1 font-medium">Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
          />
          {errors.email && (
            <span className="mt-1 text-sm text-red-600">Valid email required</span>
          )}
        </div>

        {/* ── Phone ──────────────────────── */}
        <div className="mb-6 flex flex-col">
          <label className="mb-1 font-medium">Phone</label>
          <input
            {...register('phone')}
            className="rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
          />
        </div>

        {/* ── Buttons ────────────────────── */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={close}
            className="rounded-lg bg-neutral-200 px-4 py-2 hover:bg-neutral-300"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-lg bg-primary-600 px-4 py-2 font-medium text-white shadow hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? 'Sending…' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
}
