import "bootstrap/dist/css/bootstrap.min.css";
import "react-notifications/lib/notifications.css";
import "../styles.css";
import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux/store';
import { render } from "react-dom";

export default withRedux(initStore, {debug: true}) (
    class MyApp extends App {
        static async getInitialProps({Component, ctx}) {
            return {
                pageProps: {
                    ...(Component.getInitialProps
                        ? await Component.getInitialProps(ctx)
                    : {})
                }
            }
        }

        render() {
            const {Component, pageProps, store} = this.props;
            return (
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            )
        }
    }
)