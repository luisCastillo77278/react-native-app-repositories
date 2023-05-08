import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Form, Formik } from 'formik';

const style = StyleSheet.create({
  container: {
    padding: 20,
    // flex: 1,
    justifyContent: 'center',
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    borderWidth: 1,
    marginVertical: 5,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#3b82f6',
    paddingHorizontal: 10,
    paddingVertical: 15,
    overflow: 'hidden',
    textAlign: 'center',
    color: '#ffff',
    fontSize: 21,
    marginVertical: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 21,
    marginBottom: 15,
    color: '#374151',
  },
});

const initialValues = {
  email: '',
  password: '',
};

const SignIn = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={(values) => console.log(values)}>
      {({ handleChange, values, handleSubmit }) => {
        return (
          <View style={style.container}>
            <Text style={style.title}>Sign In</Text>
            <Text style={style.subtitle}>Do not have a user account ? Sign up</Text>
            <TextInput
              style={style.input}
              placeholder="Email"
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <TextInput
              style={style.input}
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <Button onPress={handleSubmit} style={style.button} title="Log in" />
          </View>
        );
      }}
    </Formik>
  );
};

export default SignIn;
