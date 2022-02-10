import React from 'react'
import $ from 'jquery'
class Geo extends React.Component{

    componentDidMount() {
        $.get("https://ipinfo.io", function (response) {
            // $("#ip").html("IP: " + response.ip);
            // $("#address").html("Location: " + response.city + ", " + response.region);
            // $("#details").html(JSON.stringify(response, null, 4));
            console.log(response);
        }, "jsonp");
    }

    render() {
        $.get("https://ipinfo.io", function (response) {
            // $("#ip").html("IP: " + response.ip);
            // $("#address").html("Location: " + response.city + ", " + response.region);
            // $("#details").html(JSON.stringify(response, null, 4));
            console.log(response);
        }, "jsonp");
        console.log('55');
        return <>77</>
    }
}

export default Geo;