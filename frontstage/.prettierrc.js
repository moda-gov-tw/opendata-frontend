module.exports = {
  printWidth: 100,          // 每行文字數量達 100 字元就換到新的一行
  semi: false,              // 每個語句的結尾不需要分號
  singleQuote: true,        // 字串使用單引號，而不是雙引號
  trailingComma: 'none',    // 如 Object、Array 內的元素不需要尾隨逗號
  endOfLine: 'auto'         // 解決 Linux 與 Windows 換行 LF 與 CRLF 問題，直接忽略
}