import { LoginView } from '@jj/ui'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Web = () => <LoginView />

export const getStaticProps = async () => ({
  props: {
    ...(await serverSideTranslations('en', ['account', 'common', 'footer'])),
  },
})

export default Web
