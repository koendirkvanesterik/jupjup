import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { LoginView } from 'ui'

const Web = () => <LoginView />

export const getStaticProps = async () => ({
  props: {
    ...(await serverSideTranslations('en', ['account', 'common', 'footer'])),
  },
})

export default Web
