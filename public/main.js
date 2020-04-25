/**
 * 请求css
 */
getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/2.css') // readyState = 1
    request.onreadystatechange = () => {
        console.log(request.readyState)
        // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 300) {
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            } else {
                alert('加载CSS失败')
            }
        }
    }
    request.send() // readyState = 2
}

/**
 * 请求JS
 */
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/2.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 300) {
                const script = document.createElement('script')
                script.innerHTML = request.response
                document.body.appendChild(script)
            } else {
                alert('加载JS失败')
            }
        }
    }
    request.send()
}

/**
 * 请求HTML
 */
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '3.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 300) {
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
            } else {
                alert('加载HTML失败')
            }
        }
    }
    request.send()
}

/**
 * 请求XML
 */
getXML.onclick = () => {
    const request = new XMLHttpRequest
    request.open('get', '4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 300) {
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent.trim()
                alert(text)
            } else {
                alert('加载XML失败')
            }
        }
    }
    request.send()
}

/**
 * 请求JSON
 */
getJSON.onclick = () => {
    const request = new XMLHttpRequest
    request.open('get', '5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 300) {
                const object = JSON.parse(request.response)
                console.log(object)
            } else {
                alert('加载JSON失败')
            }
        }
    }
    request.send()
}

/**
 * 分页请求
 */
let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest
    request.open('get', `page${n+1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 300) {
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    const li = document.createElement('li')
                    li.textContent = item.id
                    xxx.appendChild(li)
                });
                n += 1
            } else {
                alert('加载下一页失败')
            }
        }
    }
    request.send()
}