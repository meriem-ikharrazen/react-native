import { React } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { globalStyles } from "../../../styles/global.js";
import { Formik } from "formik";
import * as yup from "yup";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "rating must be a number 1-5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values) => {
          addReview(values);
        }}
      >
        {({
          handleChange,
          values,
          handleSubmit,
          errors,
          touched,
          handleBlur,
        }) => {
          return (
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder="Review title"
                onChangeText={handleChange("title")}
                value={values.title}
                onBlur={handleBlur("title")}
              />
              <Text style={globalStyles.errorText}>
                {touched.title && errors.title}
              </Text>
              <TextInput
                style={globalStyles.input}
                placeholder="Review body"
                onChangeText={handleChange("body")}
                value={values.body}
                onBlur={handleBlur("body")}
              />
              <Text style={globalStyles.errorText}>
                {touched.body && errors.body}
              </Text>
              <TextInput
                style={globalStyles.input}
                placeholder="Rating (1-5)"
                onChangeText={handleChange("rating")}
                onBlur={handleBlur("rating")}
                value={values.rating}
                keyboardType="numeric"
              />
              <Text style={globalStyles.errorText}>
                {touched.rating && errors.rating}
              </Text>
              <Button title="submit" color="maroon" onPress={handleSubmit} />
            </View>
          );
        }}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
