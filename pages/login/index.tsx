import { useState } from "react";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Card, Title, FormContainer, Subtitle } from "./login.styles";
import { login } from "@/services/loginServices";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import { MainButton } from "@/components/adecco.styles";
import Layout from "@/components/Layout";

type Inputs = {
  email: string;
  password: string;
};

const loginSchema = yup.object({
  email: yup.string().required("Debe ingresar un nombre de usuario"),
  password: yup.string().required("Debe ingresar una contraseña"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(loginSchema),
    defaultValues: {},
  });
  const router = useRouter();

  const submit: SubmitHandler<Inputs> = async (data, e) => {
    e?.preventDefault();
    login(data)
      .then(({ data, status }) => {
        if (status == 200) {
          const cookies = new Cookies();
          cookies.set("tk_user", data.token);
          router.push("/");
        } else {
          setError("email", { type: "custom", message: data });
        }
      })
      .catch(({ response }) => {
        setError("email", { type: "custom", message: response.data.error });
      });
  };

  return (
    <Layout>
      <div className="flex flex-wrap min-h-screen	items-center bg-[#306496]">
        <div className="w-full h-full sm:h-fit sm:w-8/12 mx-auto sm:bg-white">
          <Card>
            <Title>Sign in</Title>
            <Subtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              turpis tellus...
            </Subtitle>
            <FormContainer>
              <form onSubmit={handleSubmit(submit)} className="w-full">
                <div className="mb-6">
                  <input
                    type="text"
                    id="email"
                    {...register("email")}
                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="relative w-full">
                  <input
                    type={"password"}
                    id="password"
                    {...register("password")}
                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                    placeholder="Password"
                  />
                </div>
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.password.message}
                  </p>
                )}
                <MainButton className="btn">Sign in</MainButton>
              </form>
            </FormContainer>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
