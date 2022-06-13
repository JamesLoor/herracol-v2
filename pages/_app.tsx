import * as React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../config/themeConfig'
import { Provider } from 'react-redux'
import store from 'store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
