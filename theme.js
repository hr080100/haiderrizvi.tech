const mode = () => {
    const container = document.querySelector('.container');
    const swich = document.querySelector('.switch');

    var i = 0;
    var button_number = document.getElementsByTagName('button');
    var j;
    var style = document.querySelector('body').style;
    style.setProperty('--background', 'linear-gradient(#162733, #ff00ff)');
    style.setProperty('--background2', 'linear-gradient(#ff00ff, #162733)');

    container.addEventListener('click', () => {
        container.classList.toggle('container-active');
        swich.classList.toggle('switch-active');
        i++;
        if(i%2 === 1)
        {
            document.body.style.backgroundColor = "#1ba098";
            document.getElementById('hrlogo').src = "icons/hrdark.png";
            document.getElementById('dark').style.color = "#051622";
            for(j = 0; j < button_number.length; j++)
            {
                button_number[j].style.color = "#051622";
            }
            document.getElementById('foot-icon1').src = "icons/twitterdark.png";
            document.getElementById('foot-icon2').src = "icons/linkedindark.png";
            document.getElementById('foot-icon3').src = "icons/facebookdark.png";
            document.getElementById('foot-icon4').src = "icons/instagramdark.png";
            document.getElementById('foot-icon5').src = "icons/githubdark.png";
            document.getElementById('bottom-icon1').src = "icons/twitterdark.png";
            document.getElementById('bottom-icon2').src = "icons/linkedindark.png";
            document.getElementById('bottom-icon3').src = "icons/facebookdark.png";
            document.getElementById('bottom-icon4').src = "icons/instagramdark.png";
            document.getElementById('bottom-icon5').src = "icons/githubdark.png";
            document.getElementById('bottom').style.color = "#05162255";
            document.getElementById('headline').style.color = "#8f6257";
            document.getElementById('myname').style.color = "#051622";
            document.getElementById('bio').style.color = "#000000";
            document.getElementById('mailme').style.backgroundColor = "#00458b";
            document.getElementById('mailicon').src = "icons/emailbox.png";
            document.getElementById('mailtext').style.color = "#1ba098";
            document.getElementById('copy').style.color = "#05162255";
            document.getElementById('mobile_copy').style.color = "#05162255";
            document.getElementById('line1').style.backgroundColor = "#051622";
            document.getElementById('line2').style.backgroundColor = "#051622";
            document.getElementById('line3').style.backgroundColor = "#051622";
            document.getElementById('page').style.color = "#000000";

            style.setProperty('--background', 'linear-gradient(#2196f3, #e91e63)');
            style.setProperty('--background2', 'linear-gradient(#e91e63, #2196f3)');

            document.getElementsByTagName('meta').namedItem('theme-color').setAttribute('content','#1ba098');
            document.getElementsByTagName('meta').namedItem('msapplication-navbutton-color').setAttribute('content','#1ba098');
            document.getElementsByTagName('meta').namedItem('apple-mobile-web-app-status-bar-style').setAttribute('content','#1ba098');
        }

        else if(i%2 === 0)
        {
            document.body.style.backgroundColor = "#051622";
            document.getElementById('hrlogo').src = "icons/hr.png";
            document.getElementById('dark').style.color = "#1ba098";
            for(j = 0; j < button_number.length; j++)
            {
                button_number[j].style.color = "#1ba098";
            }
            document.getElementById('foot-icon1').src = "icons/twitter.png";
            document.getElementById('foot-icon2').src = "icons/linkedin.png";
            document.getElementById('foot-icon3').src = "icons/facebook.png";
            document.getElementById('foot-icon4').src = "icons/instagram.png";
            document.getElementById('foot-icon5').src = "icons/github.png";
            document.getElementById('bottom-icon1').src = "icons/twitter.png";
            document.getElementById('bottom-icon2').src = "icons/linkedin.png";
            document.getElementById('bottom-icon3').src = "icons/facebook.png";
            document.getElementById('bottom-icon4').src = "icons/instagram.png";
            document.getElementById('bottom-icon5').src = "icons/github.png";
            document.getElementById('bottom').style.color = "#1ba09855";
            document.getElementById('headline').style.color = "#7e5146";
            document.getElementById('myname').style.color = "#1ba098";
            document.getElementById('bio').style.color = "#e1e2e1";
            document.getElementById('mailme').style.backgroundColor = "#1ba098";
            document.getElementById('mailicon').src = "icons/emailboxdark.png";
            document.getElementById('mailtext').style.color = "#00458b";
            document.getElementById('copy').style.color = "#1ba09855";
            document.getElementById('mobile_copy').style.color = "#1ba09855";
            document.getElementById('line1').style.backgroundColor = "#1ba098";
            document.getElementById('line2').style.backgroundColor = "#1ba098";
            document.getElementById('line3').style.backgroundColor = "#1ba098";
            document.getElementById('page').style.color = "#e1e2d2";

            style.setProperty('--background', 'linear-gradient(#162733, #ff00ff)');
            style.setProperty('--background2', 'linear-gradient(#ff00ff, #162733)');

            document.getElementsByTagName('meta').namedItem('theme-color').setAttribute('content','#051622');
            document.getElementsByTagName('meta').namedItem('msapplication-navbutton-color').setAttribute('content','#051622');
            document.getElementsByTagName('meta').namedItem('apple-mobile-web-app-status-bar-style').setAttribute('content','#051622');
        }
    })
}

mode();