import toast, { Toaster } from 'react-hot-toast';
import { Formik, Form, Field } from 'formik';

export default function SearchBar({ onSearch }){

return (
    <header>
    <Formik
        initialValues={{ topic: "" }}
        onSubmit={(values, actions) => {
          const trimmedTopic = values.topic.trim();
          if (trimmedTopic === "") {
              toast.error("Can not be empty");
          } else if (trimmedTopic.length < 3) {
              toast.error("Minimum 3 letters");
          } else {
              onSearch(trimmedTopic);
              actions.resetForm();
          }
      }}
      >
        <Form>
          <Field
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search by word..."
            name="topic"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
  </header>
  
)
}