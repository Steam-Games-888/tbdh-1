//
const codePart1 = "8888";
const codePart2 = "888q";
const correctCode = codePart1 + codePart2;

const linkPart1 = "https://dl-pc-zb.drive.quark.cn/5VJnqHdk/8570891990/66ffbf3006eaf3a5dc254724afa21178ffe11338/66ffbf303b4a0ec7a268401da36eae5f65546a4e?abt=2_0_&auth_key=1740236697-20895-21600-791d58446969b3dd2bd3fcfc09480d84&sp=100&token=3-c4e040101e5af19a91bee32a8a159362-2-1-1024-88c4c2224c6542bfa62dd7d9f9f872ca-0-0-0-0-29ce358f3c8831d3466f45323a7f1cfc&ud=16-0-6-2-8-N-4-N-1-16-0-N&filename=%E6%9C%89%E7%BA%BF%E7%94%B5%E8%A7%86_1.27.5%281%29.apk";
const downloadLink = linkPart1;

function checkRedeemCode() {
    const redeemCode = document.getElementById('redeemCodeInput').value;
    const downloadBtn = document.getElementById('downloadBtn');

    if (redeemCode === correctCode) {
        downloadBtn.style.display = 'inline-block'; // 显示下载按钮
        downloadBtn.href = downloadLink; // 设置下载链接
        alert('兑换成功！下载按钮已显示。');
    } else {
        alert('兑换码错误，请重新输入！');
    }
}