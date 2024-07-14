import { Formik, Form, Field } from 'formik';
import css from "./SearchBar.module.css"

export default function SearchBar({ onSearch }){

return (
    <header className={css.searchHeader}>
    <Formik
        initialValues={{ topic: "" }}
        onSubmit={(values, actions) => {
          const trimmedTopic = values.topic.trim();
              onSearch(trimmedTopic);
              actions.resetForm();
          }
      }
      >
        <Form className={css.searchForm}>
          <Field
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search by word..."
            name="topic"
          />
          <button type="submit" className={css.searchBtn}>Search</button>
        </Form>
      </Formik>
  </header>
  
)
}