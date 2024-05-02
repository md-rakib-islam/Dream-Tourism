import { useCreateBlogCommentMutation } from "@/features/blog/blogCommentSlice";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const initialState = {
  full_name: "",
  email: "",
  comment_des: "",
};
const FormReply = ({ blogId }) => {
  const [formState, setFormState] = useState({ ...initialState });
  const [createBlogComment, { isLoading, isSuccess }] =
    useCreateBlogCommentMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await createBlogComment({ ...formState, blog: blogId });
      if (res.data) {
        // alert("thanks for contact with us!");
        toast.success("Thanks for contact with us!", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setFormState(initialState);
      }
    } catch (err) {
      toast.error("Something went wrong!", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handleChange = (event) => {
    setFormState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <form className="row y-gap-30 pt-40" onSubmit={handleSubmit}>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="col-xl-6">
        <div className="form-input ">
          <input
            onChange={handleChange}
            value={formState.full_name}
            type="text"
            name="full_name"
            id="name"
            required
          />
          <label className="lh-1 text-16 text-light-1">Full Name</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-xl-6">
        <div className="form-input ">
          <input
            onChange={handleChange}
            value={formState.email}
            type="email"
            name="email"
            id="email"
            required
          />
          <label className="lh-1 text-16 text-light-1">Email</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <textarea
            onChange={handleChange}
            value={formState.comment_des}
            id="message"
            name="comment_des"
            required
            rows={6}
          ></textarea>
          <label className="lh-1 text-16 text-light-1">
            Write Your Comment
          </label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-auto">
        <button
          type="submit"
          href="#"
          className="button -md -dark-1 bg-blue-1 text-white"
        >
          Post Comment <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
      {/* End .col */}
    </form>
  );
};

export default FormReply;
