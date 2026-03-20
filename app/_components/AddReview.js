import FormButton from "./FormButton";

function AddReview({ guest }) {
  const { id, fullName } = guest;

  return (
    <div className="flex items-end">
      <form className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
        <div className="space-y-2">
          <label htmlFor="fullName">Full name</label>
          <input
            disabled
            defaultValue={fullName}
            name="fullName"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="reviewText">Your review:</label>
          <textarea
            name="reviewText"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="stars">Your rating</label>
          <input
            type="number"
            maxLength={5}
            minLength={1}
            name="stars"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <FormButton>Update profile</FormButton>
        </div>
      </form>
    </div>
  );
}

export default AddReview;
