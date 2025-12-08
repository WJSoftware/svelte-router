<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import Hero from './Hero.svelte';
    import Quickstart from './Quickstart.svelte';
    import FeaturesTable from './FeaturesTable.svelte';
    import CodeSnippet from '../../CodeSnippet.svelte';
    import Card from '../../Card.svelte';
    import CardHeader from '../../CardHeader.svelte';
    import CardBody from '../../CardBody.svelte';
    import { RouterTrace, Link } from '@svelte-router/core';
    import xml from 'svelte-highlight/languages/xml';
    import { getTitleContext } from '../../state/title.svelte';

    // Import code samples as raw text
    import pathRoutingExample from './code-samples/path-routing-example.txt?raw';
    import hashRoutingExample from './code-samples/hash-routing-example.txt?raw';
    import multiHashExample from './code-samples/multi-hash-example.txt?raw';
    import themeSvelte from '../../state/theme.svelte';

    getTitleContext().current = '';
</script>

<div class="root" transition:fade={{ duration: 500 }}>
    <Hero />

    <!-- Key Features Showcase -->
    <div class="row mt-5 g-4">
        <div class="col-lg-4">
            <div transition:fly={{ delay: 100, y: 50, duration: 600 }}>
                <Card border="primary" class="h-100">
                    <CardHeader background="primary" textColor="white" class="text-center" tag="h4">
                        🛣️ Path Routing
                    </CardHeader>
                    <CardBody>
                        <p class="card-text">
                            Classic URL path-based routing with modern SPA performance.
                            SEO-friendly, bookmarkable, and lightning fast!
                        </p>
                        <CodeSnippet
                            language={xml}
                            code={pathRoutingExample}
                            title="Path Routing Example"
                        />
                        <div class="text-center mt-3">
                            <Link href="/path-routing" class="btn btn-primary"
                                >Try Path Routing →</Link
                            >
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>

        <div class="col-lg-4">
            <div transition:fly={{ delay: 200, y: 50, duration: 600 }}>
                <Card border="success" class="h-100">
                    <CardHeader background="success" textColor="white" class="text-center" tag="h4">
                        🚀 Hash Routing
                    </CardHeader>
                    <CardBody>
                        <p class="card-text">
                            Fragment-based routing that works everywhere! Perfect for modals,
                            overlays, and client-side navigation. Also works great in Electron apps!
                        </p>
                        <p class="small text-muted mb-3">
                            💡 <strong>Pro tip:</strong> Set <code>implicitMode: 'hash'</code>
                            during initialization to avoid repeating <code>hash</code> on every component!
                        </p>
                        <CodeSnippet
                            language={xml}
                            code={hashRoutingExample}
                            title="Hash Routing Example"
                        />
                        <div class="text-center mt-3">
                            <Link href="/hash-routing" class="btn btn-success"
                                >Try Hash Routing →</Link
                            >
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>

        <div class="col-lg-4">
            <div transition:fly={{ delay: 300, y: 50, duration: 600 }}>
                <Card border="warning" class="h-100">
                    <CardHeader background="warning" textColor="dark" class="text-center" tag="h4">
                        🌟 Multi-Hash Magic
                    </CardHeader>
                    <CardBody>
                        <p class="card-text">
                            <strong>World's first!</strong> Multiple independent hash routers running
                            simultaneously. Perfect for micro-frontends!
                        </p>
                        <CodeSnippet
                            language={xml}
                            code={multiHashExample}
                            title="Multi-Hash Example"
                        />
                        <div class="text-center mt-3">
                            <Link href="/hash-routing" class="btn btn-warning text-dark"
                                >See Multi-Hash →</Link
                            >
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    </div>

    <!-- Why Choose Svelte Router -->
    <div class="row mt-5">
        <div class="col-lg-8 offset-lg-2">
            <div transition:fly={{ delay: 400, y: 50, duration: 600 }}>
                <Card border="info">
                    <CardHeader background="info" textColor="white" class="text-center" tag="h3">
                        🎯 Why Choose Svelte Router?
                    </CardHeader>
                    <CardBody>
                        <div class="row">
                            <div class="col-md-6">
                                <h5 class="text-info">🚀 Performance</h5>
                                <ul class="list-unstyled">
                                    <li>✅ Less than 1,500 lines of code</li>
                                    <li>✅ Zero-config router setup</li>
                                    <li>✅ Instant navigation</li>
                                    <li>✅ No page reloads</li>
                                </ul>

                                <h5 class="text-info mt-4">🎪 Unique Features</h5>
                                <ul class="list-unstyled">
                                    <li class="world-first">
                                        🥇 <strong>World's first</strong> multi-hash routing
                                    </li>
                                    <li class="world-first">
                                        🥇 <strong>World's first</strong> simultaneous path + hash routing
                                    </li>
                                    <li class="world-first">
                                        🥇 <strong>World's first</strong> Disconnected pieces of UI
                                    </li>
                                    <li>✅ Multi-route matching</li>
                                    <li>✅ Micro-frontend ready</li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <h5 class="text-info">🛠️ Developer Experience</h5>
                                <ul class="list-unstyled">
                                    <li>✅ Full TypeScript support</li>
                                    <li>✅ Superb IntelliSense</li>
                                    <li>✅ Reactive by design</li>
                                    <li>
                                        ✅ Easy learning curve - piggybacks on Svelte v5 reactivity
                                    </li>
                                </ul>

                                <h5 class="text-info mt-4">🌐 Production Ready</h5>
                                <ul class="list-unstyled">
                                    <li>✅ SEO friendly</li>
                                    <li>✅ Works with any hosting</li>
                                    <li>✅ Browser back/forward support</li>
                                    <li>✅ Deep linking support</li>
                                </ul>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    </div>

    <!-- Quick Start and Features -->
    <div class="row mt-5">
        <div class="col-12 col-lg-6 col-xxl-4">
            <div transition:fly={{ delay: 500, y: 50, duration: 600 }}>
                <Quickstart />
            </div>
        </div>
        <div class="col-12 col-lg-6 col-xxl-8">
            <div transition:fly={{ delay: 600, y: 50, duration: 600 }}>
                <FeaturesTable />
            </div>
        </div>
    </div>

    <!-- Call to Action -->
    <div class="row mt-5">
        <div class="col-lg-10 offset-lg-1">
            <div
                class="alert alert-primary text-center"
                transition:fly={{ delay: 700, y: 50, duration: 600 }}
            >
                <h4 class="alert-heading">🎮 Ready to Get Started?</h4>
                <p class="mb-3">
                    Explore the different routing modes and see the power of @svelte-router/core in
                    action!
                </p>
                <div class="d-flex flex-wrap justify-content-center gap-3">
                    <Link href="/path-routing" class="btn btn-primary btn-lg"
                        >🛣️ Path Routing Demo</Link
                    >
                    <Link href="/hash-routing" class="btn btn-success btn-lg"
                        >🚀 Hash Routing Demo</Link
                    >
                </div>
            </div>
        </div>
    </div>

    <!-- Router Trace Section -->
    <div class="row mt-5">
        <div class="col">
            <div transition:fly={{ delay: 800, y: 50, duration: 600 }}>
                <Card>
                    <CardHeader tag="h3">🔍 About the Route Tracer</CardHeader>
                    <CardBody>
                        <p>
                            The following trace shows the current router's state and will appear
                            throughout the demo pages. It's a powerful debugging tool that shows
                            exactly how routes are being matched and processed.
                        </p>
                        <div class="table-responsive-lg">
                            <RouterTrace
                                class="table table-striped table-hover"
                                buttonClass="btn btn-sm btn-outline-primary"
                                darkTheme={themeSvelte.current === 'dark'}
                            />
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    </div>
</div>

<style>
    .root {
        z-index: 10;
    }

    .world-first {
        font-size: 1.1em;
        font-weight: 500;
    }
</style>
