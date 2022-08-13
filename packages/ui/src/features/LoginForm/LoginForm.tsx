import { Field, FieldProps, Form, Formik } from 'formik'
import { useTranslation } from 'next-i18next'
import { object, string } from 'yup'
import { Button, FormControl, Input, Link, Stack, Text } from '../../elements'

const schema = object().shape({
  email: string().default('').email().required(),
  password: string().default('').required(),
})

export const LoginForm = () => {
  const { t } = useTranslation('account')

  return (
    <Formik
      initialValues={schema.cast({})}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      <Form method="POST">
        <Stack direction="column" spacing="medium">
          <Stack direction="column" spacing="small">
            <Field name="email">
              {({ field, meta }: FieldProps) => (
                <FormControl
                  hint={meta.touched && meta.error}
                  error={!!meta.error}
                  label={t('email')}
                >
                  <Input {...field} />
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field, meta }: FieldProps) => (
                <FormControl
                  hint={meta.touched && meta.error}
                  error={!!meta.error}
                  label={t('password')}
                >
                  <Input {...field} type="password" />
                </FormControl>
              )}
            </Field>
          </Stack>
          <Button type="submit" variant="block">
            {t('login')}
          </Button>
          <Stack direction="row" justify="space-between">
            <Link href="/account/forgot-password/">
              <Text size="small">{t('forgot-password')}</Text>
            </Link>
            <Link href="/account/sign-up/">
              <Text size="small">{t('sign-up')}</Text>
            </Link>
          </Stack>
        </Stack>
      </Form>
    </Formik>
  )
}
