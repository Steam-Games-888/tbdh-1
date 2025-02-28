//
const codePart1 = "8888";
const codePart2 = "888q";
const correctCode = codePart1 + codePart2;

const linkPart1 = "https://dl-pc-zb.pds.quark.cn/5VJnqHdk/8570891990/66ffbf3006eaf3a5dc254724afa21178ffe11338/66ffbf303b4a0ec7a268401da36eae5f65546a4e?Expires=1740771329&OSSAccessKeyId=LTAI5tJJpWQEfrcKHnd1LqsZ&Signature=J8FxcBfd5ordWOI2i2CYGf3UBNA%3D&x-oss-traffic-limit=503316480&response-content-disposition=attachment%3B%20filename%3D%25E6%259C%2589%25E7%25BA%25BF%25E7%2594%25B5%25E8%25A7%2586_1.27.5%25284%2529.apk%3Bfilename%2A%3Dutf-8%27%27%25E6%259C%2589%25E7%25BA%25BF%25E7%2594%25B5%25E8%25A7%2586_1.27.5%25284%2529.apk&callback-var=eyJ4OmF1IjoiLSIsIng6dWQiOiIxNi0wLTYtMi04LU4tNC1OLTEtMTYtMC1OIiwieDpzcCI6IjEwMCIsIng6dG9rZW4iOiI0LWM0ZTA0MDEwMWU1YWYxOWE5MWJlZTMyYThhMTU5MzYyLTItMS0xMDI0LTg4YzRjMjIyNGM2NTQyYmZhNjJkZDdkOWY5Zjg3MmNhLTAtMC0wLTAtZTBlYmQ3ZDJkZGU3ODdiOWQ0ZjdhN2JjNGQxZGE3YzIiLCJ4OnR0bCI6IjIxNjAwIn0%3D&abt=2_0_&callback=eyJjYWxsYmFja0JvZHlUeXBlIjoiYXBwbGljYXRpb24vanNvbiIsImNhbGxiYWNrU3RhZ2UiOiJiZWZvcmUtZXhlY3V0ZSIsImNhbGxiYWNrRmFpbHVyZUFjdGlvbiI6Imlnbm9yZSIsImNhbGxiYWNrVXJsIjoiaHR0cHM6Ly9kcml2ZS1hdXRoLnF1YXJrLmNuL291dGVyL29zcy9jaGVja3BsYXkiLCJjYWxsYmFja0JvZHkiOiJ7XCJob3N0XCI6JHtodHRwSGVhZGVyLmhvc3R9LFwic2l6ZVwiOiR7c2l6ZX0sXCJyYW5nZVwiOiR7aHR0cEhlYWRlci5yYW5nZX0sXCJyZWZlcmVyXCI6JHtodHRwSGVhZGVyLnJlZmVyZXJ9LFwiY29va2llXCI6JHtodHRwSGVhZGVyLmNvb2tpZX0sXCJtZXRob2RcIjoke2h0dHBIZWFkZXIubWV0aG9kfSxcImlwXCI6JHtjbGllbnRJcH0sXCJwb3J0XCI6JHtjbGllbnRQb3J0fSxcIm9iamVjdFwiOiR7b2JqZWN0fSxcInNwXCI6JHt4OnNwfSxcInVkXCI6JHt4OnVkfSxcInRva2VuXCI6JHt4OnRva2VufSxcImF1XCI6JHt4OmF1fSxcInR0bFwiOiR7eDp0dGx9LFwiZHRfc3BcIjoke3g6ZHRfc3B9LFwiaHNwXCI6JHt4OmhzcH0sXCJjbGllbnRfdG9rZW5cIjoke3F1ZXJ5U3RyaW5nLmNsaWVudF90b2tlbn19In0%3D&ud=16-0-6-2-8-N-4-N-1-16-0-N";
const downloadLink = linkPart1;

function checkRedeemCode() {
    const redeemCode = document.getElementById('redeemCodeInput').value;
    const downloadBtn = document.getElementById('downloadBtn');

    if (redeemCode === correctCode) {
        downloadBtn.style.display = 'inline-block'; // 显示下载按钮
        downloadBtn.href = downloadLink; // 设置下载链接
        alert('感谢购买！兑换成功！下载按钮已显示。');
    } else {
        alert('兑换码错误，请重新输入！');
    }
}
