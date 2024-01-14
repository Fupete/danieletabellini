import { co2 } from '@tgwf/co2';

// co2.js page carbon estimate
const co2Emission = new co2();

function unhumanize(text) { // xxx could improve 
    return text
        .replace(/(\d+)+(\.(\d+))?\s?(k|m|g|t)?b?/i, function (value, p1, p2, p3, p4) { return parseFloat(p1 + (p2 || "")) * ({ 'K': 1 << 10, 'M': 1 << 20, 'G': 1 << 30, 'T': 1 << 40 }[p4] || 1); })
        .replace(/[^\d.-]/g, '')
}

async function tryEstimateCO2ofCurrentPage() {
    await new Promise(resolve => setTimeout(resolve, 500)); // wait just to let speedlify do its job, xxx could improve
    const speedlifyScore = document.getElementsByTagName('speedlify-score');
    if (speedlifyScore.length) {

        // read page weight and estimante CO2
        const bytes = speedlifyScore[0].shadowRoot.childNodes[4].childNodes[0].firstChild.data; // page weight via speedlify shadowRoot markup
        const bytesSent = unhumanize(bytes); // convert '324 KiB' to its numbers in bytes
        const estimatedCO2 = co2Emission.perVisit(bytesSent, false); // estimante CO2 per visits (world estimate, 75% new visitors)

        // string message IT/EN
        const stringaCO2_EN = `You consume about ${estimatedCO2.toFixed(3)} grams of CO2 to view this page.`;
        const stringaCO2_IT = `Consumi circa ${estimatedCO2.toFixed(3)} grammi di CO2 per visualizzare questa pagina.`;
        let stringaCO2
        if (document.documentElement.lang == 'en') stringaCO2 = stringaCO2_EN;
        else stringaCO2 = stringaCO2_IT;

        // publish results
        const text = document.createTextNode(stringaCO2);
        document.getElementsByClassName('estimatedCo2')[0].appendChild(text);
    }
}

tryEstimateCO2ofCurrentPage();