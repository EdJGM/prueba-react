import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { Formik, Form, Field as FormikField, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../App.css'

const validationSchema = Yup.object({
    firstName: Yup.string()
        .matches(/^[A-Za-z]+$/, 'El nombre no debe contener espacios ni números')
        .max(10, 'El nombre no debe exceder los 10 caracteres')
        .required('El nombre es requerido'),
    lastName: Yup.string()
        .matches(/^[A-Za-z]+$/, 'El apellido no debe contener espacios ni números')
        .max(10, 'El apellido no debe exceder los 10 caracteres')
        .required('El apellido es requerido'),
    asunto: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'El asunto no debe contener números')
        .max(12, 'El asunto no debe exceder los 12 caracteres')
        .required('El asunto es requerido'),
    email: Yup.string()
        .email('Correo inválido')
        .required('El correo es requerido'),
    phoneNumber: Yup.string()
        .matches(/^[0-9]+$/, 'El número de teléfono no debe contener letras ni espacios')
        .min(10, 'El número de teléfono debe tener al menos 10 dígitos')
        .required('El número de teléfono es requerido'),
    message: Yup.string()
        .max(200, 'El mensaje no debe exceder los 200 caracteres')
        .required('El mensaje es requerido'),
    agreed: Yup.boolean()
        .oneOf([true], 'Debes aceptar la política de privacidad'),
})

export default function Contact() {
    // eslint-disable-next-line no-unused-vars
    const [agreed, setAgreed] = useState(false)

    return (
        <div className="px-6 py-24 sm:py-32 lg:px-8">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contáctanos</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    ¿Tienes alguna pregunta o comentario?
                    Completa el formulario a continuación y
                    nos pondremos en contacto contigo lo antes posible.
                </p>
            </div>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    asunto: '',
                    email: '',
                    phoneNumber: '',
                    message: '',
                    agreed: false,
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {({ values, handleChange, handleBlur, setFieldValue }) => (
                    <Form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Nombre
                                </label>
                                <div className="mt-2.5">
                                    <FormikField
                                        id="first-name"
                                        name="firstName"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    <ErrorMessage name="firstName" component="p" className="text-red-500 text-sm" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Apellido
                                </label>
                                <div className="mt-2.5">
                                    <FormikField
                                        id="last-name"
                                        name="lastName"
                                        type="text"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    <ErrorMessage name="lastName" component="p" className="text-red-500 text-sm" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="asunto" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Asunto
                                </label>
                                <div className="mt-2.5">
                                    <FormikField
                                        id="asunto"
                                        name="asunto"
                                        type="text"
                                        autoComplete="organization"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    <ErrorMessage name="asunto" component="p" className="text-red-500 text-sm" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Correo
                                </label>
                                <div className="mt-2.5">
                                    <FormikField
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Número de teléfono
                                </label>
                                <div className="relative mt-2.5">
                                    <div className="absolute inset-y-0 left-0 flex items-center">
                                        <label htmlFor="country" className="sr-only">
                                            País
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            className="select-hide-default-icon h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                        >
                                            <option>US</option>
                                            <option>EU</option>
                                            <option>ECU</option>
                                        </select>
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                                        />
                                    </div>
                                    <FormikField
                                        id="phone-number"
                                        name="phoneNumber"
                                        type="tel"
                                        autoComplete="tel"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    <ErrorMessage name="phoneNumber" component="p" className="text-red-500 text-sm" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Mensaje
                                </label>
                                <div className="mt-2.5">
                                    <FormikField
                                        as="textarea"
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    <ErrorMessage name="message" component="p" className="text-red-500 text-sm" />
                                </div>
                            </div>
                            <div className="flex gap-x-4 sm:col-span-2">
                                <div className="flex h-6 items-center">
                                    <Switch
                                        checked={values.agreed}
                                        onChange={(value) => setFieldValue('agreed', value)}
                                        className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
                                    >
                                        <span className="sr-only">Agree to policies</span>
                                        <span
                                            aria-hidden="true"
                                            className="h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                                        />
                                    </Switch>
                                    <ErrorMessage name="agreed" component="p" className="text-red-500 text-sm" />
                                </div>
                                <span className="text-sm leading-6 text-gray-600">
                                    Al seleccionar esta opción, acepta nuestra{' '}
                                    <Link to="#" className="font-semibold text-indigo-600">
                                        política de&nbsp;privacidad
                                    </Link>
                                    .
                                </span>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Hablemos
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div>
        </div >
    )
}
