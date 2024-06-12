function get_aws_uid(emailContent) {
  // 使用正則表達式來匹配 "AWS Account" 後面的數字
  const regex = /AWS Account\s+(\d+)/;
  const match = emailContent.match(regex);

  if (match && match[1]) {
    return match[1];
  } else {
    return null;  // 如果沒有找到匹配的，返回 null
  }
}


function get_gcp_uid(emailContent) {
  // 使用正則表達式來匹配 "Billing account" 後面的 ID
  const regex = /Billing account:\s*([A-Z0-9-]+)/i;
  const match = emailContent.match(regex);

  if (match && match[1]) {
    return match[1];
  } else {
    return null;  // 如果沒有找到匹配的，返回 null
  }
}


function get_azure_uid(emailContent) {
  // 使用正則表達式來匹配電子郵件地址中的域名部分
  const regex = /[\w.-]+@([\w.-]+)/;
  const match = emailContent.match(regex);

  if (match && match[1]) {
    return match[1];
  } else {
    return null;  // 如果沒有找到匹配的，返回 null
  }
}

// 從阿里雲告警郵件標題得到 UID
function get_ali_uid(subject){
  // 定義正則表達式模式來匹配並捕獲帳戶 ID
  var subjectPattern = /Account ID:(\d+)/;
  
  // 使用正則表達式匹配並提取帳戶 ID
  var match = subject.match(subjectPattern);
  
  // 如果找到匹配，返回帳戶 ID，否則返回 null
  if (match) {
    return match[1];
  } else {
    return null;
  }
}

// 從騰訊雲告警內文得到UID
function get_tencent_uid(emailContent){
  // Use a regular expression to match the ID
  const regex = /账号\sID：(\d+)/;
  const match = emailContent.match(regex);

  if (match && match.length > 1) {
    // Match successful, return the ID
    return match[1];
  } else {
    // Match failed, return null
    return null;
  }
}

function get_huawei_uid(){
  // 從華為告警信，提取出UID
  // 樣本太少，先 pass
  return ''
}
