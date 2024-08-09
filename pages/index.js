import { useState } from "react";
import Header from "../includes/header";
import Footer from "../includes/footer";

export default function Home() {

    return (
        <div class="container-fluid">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}


function Body() {
    return (
        <section>
                <div class="row">
                    <div class="col-md-12">
                        <div class="jumbotron">
                            <h2>
                                Hello, world!
                            </h2>
                            <p>
                                This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.
                            </p>
                            <p>
                                <a class="btn btn-primary btn-large" href="#">Learn more</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <h2>
                            Heading
                        </h2>
                        <p>
                            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                        </p>
                        <p>
                            <a class="btn" href="#">View details »</a>
                        </p>
                    </div>
                    <div class="col-md-4">
                        <h2>
                            Heading
                        </h2>
                        <p>
                            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                        </p>
                        <p>
                            <a class="btn" href="#">View details »</a>
                        </p>
                    </div>
                    <div class="col-md-4">
                        <h2>
                            Heading
                        </h2>
                        <p>
                            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                        </p>
                        <p>
                            <a class="btn" href="#">View details »</a>
                        </p>
                    </div>
                </div>
                
            </section>
    );
}