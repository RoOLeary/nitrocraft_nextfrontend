import Head from 'next/head'
import Layout from '../components/Layout'
import AccessDenied from '../components/AccessDenied'
import { useSession, getSession } from "next-auth/react";
import YouTube from "react-youtube";


export default function Members() {
    const { data: session, status } = useSession()

    const opts = {
        height: "560",
        width: "100%",
        playerVars: {
          autoplay: 1,
        },
    };

    const _onReady = (event) => {
        // event.target.pauseVideo();
    }

    const HeroText = {
        headline: 'Members',
    }

    // if (status === "loading") {
    //     return <p>Loading...</p>
    // }

    // if (status === "unauthenticated") {
    //     return <h1>Access Denied</h1>
    // }

    if (!session) {
        return (
          <Layout>
            <Head><title>Access Denied</title></Head>
            <section className="b-text  c-section" id="learn-more">
                <div className="o-wrapper">
                    <AccessDenied />
                </div>
            </section>
          </Layout>
        )
    }

    return (
        <Layout>
            <Head><title>RoNext JS Prototype | Members  - {HeroText.headline}</title></Head>
            <YouTube videoId="R61SnV5iLQ4" opts={opts} onReady={_onReady} />
        </Layout>
  )
}



