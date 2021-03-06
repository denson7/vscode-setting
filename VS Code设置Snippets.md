## 在线生成代码片段

```
https://snippet-generator.app/
```

## 配置代码段(Code Snippet)

```
Ctrl+Shift+P -> 打开命令窗口输入 snippet ->  选择 Perferences: Configure User Snippet。
选择对应的语言，例如typescript，会创建一个typescript.json文件，并会自动打开一个JSON格式的配置文件。并有一个Example。
参数说明：
prefix：前缀，定义关键字。
body：模板的主体内容。
description：备注说明
$：占位符，$ 后面紧跟数字(0,1,2...)表示触发Snippet后的光标位置，可以按Tab切换光标跳转位置，直到$0位置。
Variables：变量
```

## js

```
{
  // Place your snippets for javascript here. Each snippet is defined under a snippet name and has a prefix, body and
  // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the
  // same ids are connected.
  // Example:
  // "Print to console": {
  //  "prefix": "log",
  //  "body": [
  //    "console.log('$1');",
  //    "$2"
  //  ],
  //  "description": "Log output to console"
  // },
  "Console Log": {
    "prefix": "l",
    "body": [
      "console.log($0)"
    ]
  },
  "Destructure": {
    "prefix": "d",
    "body": [
      "const { $1 } = $0"
    ]
  },
  "Try/Catch": {
    "prefix": "try",
    "body": [
      "try {",
      "  $1",
      "} catch (err) {",
      "  $0",
      "}"
    ]
  },
  "To-Do": {
    "prefix": "todo",
    "body": [
      "// TODO: $1"
    ]
  },
  "Comment": {
    "prefix": "c",
    "body": [
      "/**",
      " * $1",
      " */"
    ]
  },
  "Function": {
    "prefix": "f",
    "body": [
      "/**",
      " * $1 $2",
      " */",
      "function $1($3) {",
      "  $0",
      "}",
    ]
  },
  "Function Without Comment": {
    "prefix": "ff",
    "body": [
      "function $1($2) {",
      "  $0",
      "}",
    ]
  },
  "Import": {
    "prefix": "i",
    "body": [
      "import $1 from '${2:$1}';"
    ]
  },
  "Import Component": {
    "prefix": "ic",
    "body": [
      "import $1 from './$1'"
    ]
  },
  "Import React": {
    "prefix": "ir",
    "body": [
      "import React from 'react';"
    ]
  },
  "useState": {
    "prefix": "us",
    "body": [
      "const [$1, $2] = useState($0)"
    ]
  },
  "useEffect": {
    "prefix": "ue",
    "body": [
      "useEffect(_ => {",
      "  $0",
      "}, [$1])"
    ]
  },
  "Export Default": {
    "prefix": "ed",
    "body": [
      "export default "
    ]
  },
  "Export Default Function": {
    "prefix": "edf",
    "body": [
      "/**",
      " * $1 $2.",
      " */",
      "",
      "export default function $1($3) {",
      "  $0",
      "}"
    ],
  },
  "Export Const Function": {
    "prefix": "exc",
    "body": [
      "/**",
      " * $1 $2",
      " */",
      "export const $1 = ($3) => {",
      "  $0",
      "}"
    ],
    "description": "denson snippet"
  },
  "Variable": {
    "prefix": "testv",
    "body": [
      "/**",
      " * Created by $CURRENT_YEAR/$CURRENT_MONTH/$CURRENT_DATE",
      " * 当前年份: $CURRENT_YEAR",
      " * 当前月份: $CURRENT_MONTH",
      " * 当前月份名称: $CURRENT_MONTH_NAME | $CURRENT_MONTH_NAME_SHORT",
      " * 当前天: $CURRENT_DATE",
      " * 当前星期几: $CURRENT_DAY_NAME | $CURRENT_DAY_NAME_SHORT",
      " * 当前时间: $CURRENT_HOUR",
      " * 当前分: $CURRENT_MINUTE",
      " * 当前秒: $CURRENT_SECOND",
      " *",
      " * 当前文档的文件名: $TM_FILENAME",
      " * 当前文档的目录: $TM_DIRECTORY",
      " * 当前文档路径: $TM_FILEPATH",
      " * 当前工作区名: $WORKSPACE_NAME",
      " * 当前行的内容: $TM_CURRENT_WORD",
      " * 当前选定的文本或空字符串: $TM_SELECTED_TEXT",
      " * 注释: $LINE_COMMENT",
      " *",
      " * 下拉选项: ${2|golang,ts,node|}",
      " **/"
    ],
    "description": "denson snippet"
  }


}
```

## ts

跟 js 一样

## go

```
{
  // Place your snippets for go here. Each snippet is defined under a snippet name and has a prefix, body and
  // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the
  // same ids are connected.
  // Example:
  // "Print to console": {
  //  "prefix": "log",
  //  "body": [
  //    "console.log('$1');",
  //    "$2"
  //  ],
  //  "description": "Log output to console"
  // }
  "Package": {
    "prefix": "pa",
    "body": [
      "// Package $1 provides $2",
      "package $1"
    ]
  },
  "Switch": {
    "prefix": "sw",
    "body": [
      "switch $1 {",
      "  case $2:",
      "    $0",
      "  default:",
      "    // TODO: implement",
      "}",
    ]
  },
  "Main": {
    "prefix": "main",
    "body": [
      "package main",
      "",
      "func main() {",
      "  $0",
      "}"
    ]
  },
  "Close": {
    "prefix": "cl",
    "body": [
      "close($0)"
    ]
  },
  "Default": {
    "prefix": "def",
    "body": [
      "default:"
    ]
  },
  "Context Done": {
    "prefix": "cd",
    "body": [
      "<-ctx.Done()"
    ]
  },
  "Context Error": {
    "prefix": "ce",
    "body": [
      "ctx.Err()"
    ]
  },
  "Context Argument": {
    "prefix": "con",
    "body": [
      "ctx context.Context"
    ]
  },
  "Context Background": {
    "prefix": "cb",
    "body": [
      "context.Background()"
    ]
  },
  "Context WithTimeout": {
    "prefix": "ct",
    "body": [
      "ctx, cancel := context.WithTimeout(ctx, $0)",
      "defer cancel()"
    ]
  },
  "Context WithCancel": {
    "prefix": "cc",
    "body": [
      "ctx, cancel := context.WithCancel(ctx)",
      "defer cancel()"
    ]
  },
  "NewContext": {
    "prefix": "nc",
    "body": [
      "// ${1:name}Key is a private context key.",
      "type ${1:name}Key struct{}",
      "",
      "// New$3Context returns a new context with ${1:name}.",
      "func New$3Context(ctx context.Context, v *${2:Type}) context.Context {",
      "  return context.WithValue(ctx, ${1:name}Key{}, v)",
      "}",
      "",
      "// $3FromContext returns ${1:name} from context.",
      "func $3FromContext(ctx context.Context) (*${2:Type}, bool) {",
      "  v, ok := ctx.Value(${1:name}Key{}).(*${2:Type})",
      "  return v, ok",
      "}",
    ]
  },
  "Goroutine": {
    "prefix": "go",
    "body": [
      "go func(){",
      "  $0",
      "}()",
    ]
  },
  "Empty Struct": {
    "prefix": "es",
    "body": [
      "struct{}{}"
    ]
  },
  "Case": {
    "prefix": "ca",
    "body": [
      "case $1:"
    ]
  },
  "Slice Remove": {
    "prefix": "sr",
    "body": [
      "${1:slice} = append(${1:slice}[:${2:index}], ${1:slice}[${2:index}+1:]...)"
    ]
  },
  "sort": {
    "prefix": "sort",
    "body": [
      "sort.Slice(${1:s}, func(i, j int) bool {",
      "  a := $1[i]",
      "  b := $1[j]",
      "  return $0",
      "})"
    ]
  },
  "int enum": {
    "prefix": "enum-int",
    "body": [
      "// $1 $2.",
      "type $1 int",
      "",
      "// $1s available.",
      "const (",
        "  $1$3 $1 = iota",
        "  $0",
      ")",
    ]
  },
  "string enum": {
    "prefix": "enum-string",
    "body": [
      "// $1 $2.",
      "type $1 string",
      "",
      "// $1s available.",
      "const (",
      "  $0",
      ")",
    ]
  },
  "defer": {
    "prefix": "d",
    "body": [
      "defer $0"
    ]
  },
  "defer func": {
    "prefix": "de",
    "body": [
      "defer func() {",
      "  $0",
      "}()"
    ]
  },
  "db": {
    "prefix": "db",
    "body": [
      "db *sqlx.DB"
    ]
  },
  "if": {
    "prefix": "if",
    "body": [
      "if ${1:v}, ok := $2; ok {",
      "  $0",
      "}"
    ]
  },
  "options": {
    "prefix": "options",
    "body": [
      "// Option function.",
      "type Option func(*$1) error",
      "",
      "// New $2 with the given options.",
      "func New(options ...Option) (*$1, error) {",
      "  var v $1",
      "  for _, o := range options {",
      "     if err := o(&v); err != nil {",
      "       return nil, err",
      "     }",
      "  }",
      "  return &v, nil",
      "}"
    ]
  },
  "option": {
    "prefix": "o",
    "body": [
      "// With$1 $0.",
      "func With$1($2) Option {",
      "  return func($3) error {",
      "    $4",
      "    return nil",
      "  }",
      "}"
    ]
  },
  "log error": {
    "prefix": "le",
    "body": [
      "logs.WithError(err).Error(\"$1\")"
    ]
  },
  "log with fields": {
    "prefix": "lw",
    "body": [
      "logs.WithFields(log.Fields{",
      "  $0",
      "})"
    ]
  },
  "delete": {
    "prefix": "del",
    "body": [
      "delete($1, \"$2\")"
    ]
  },
  "Pretty Print": {
    "prefix": "pp",
    "body": [
      "pretty.Print($0)",
    ]
  },
  "fmt.Printf": {
    "prefix": "p",
    "body": [
      "fmt.Printf(\"${1:%#v}\\n\", $0)"
    ]
  },
  "fmt.Fprintf": {
    "prefix": "pf",
    "body": [
      "fmt.Fprintf(w, \"${1:%s}\", $0)"
    ]
  },
  "log.Printf": {
    "prefix": "l",
    "body": [
      "log.Printf(\"${1:%v}\", $0)"
    ]
  },
  "log.Fatalf": {
    "prefix": "fa",
    "body": [
      "log.Fatalf(\"error$1: %s\", ${0:err})"
    ]
  },
  "Append": {
    "prefix": "a",
    "body": [
      "$1 = append($1, $0)"
    ]
  },
  "js.Value": {
    "prefix": "j",
    "body": [
      "js.Value"
    ]
  },
  "js.Func": {
    "prefix": "jf",
    "body": [
      "js.FuncOf(func(this js.Value, args []js.Value) interface{} {",
      "  $0",
      "  return nil",
      "})",
    ]
  },
  "Build Tag": {
    "prefix": "build",
    "body": [
      "// +build ${0:js}"
    ]
  },
  "To-do": {
    "prefix": "todo",
    "body":[
      "// TODO: $0"
    ]
  },
  "Float64": {
    "prefix": "fl",
    "body": [
      "float64($0)"
    ]
  },
  "Method": {
    "prefix": "m",
    "body": [
      "// $3 ${4:implementation}.",
      "func ($1 *$2) $3($5) $6 {",
      "  $0",
      "}"
    ]
  },
  "Method Copy": {
    "prefix": "mm",
    "body": [
      "// $3 ${4:implementation}.",
      "func ($1 $2) $3($5) $6 {",
      "  $0",
      "}"
    ]
  },
  "Make Chan": {
    "prefix": "mc",
    "body": [
      "make(chan ${0})"
    ]
  },
  "Sprintf": {
    "prefix": "ss",
    "body": [
      "fmt.Sprintf(\"$1\", $0)"
    ]
  },
  "If Error": {
    "prefix": "e",
    "body": [
      "if err != nil {",
      "  $0",
      "}"
    ]
  },
  "errors.Is()": {
    "prefix": "is",
    "body": [
      "if errors.Is(err, ${1:io.ErrUnexpectedEOF}) {",
      "  $0",
      "}",
    ]
  },
  "errors.As()": {
    "prefix": "as",
    "body": [
      "var e ${1:*os.PathError}",
      "if errors.As(err, &e) {",
      "  $0",
      "}",
    ]
  },
  "Error Wrap": {
    "prefix": "ew",
    "body": [
      "fmt.Errorf(\"$1: %w\", err)"
    ]
  },
  "If Error Oneliner": {
    "prefix": "ie",
    "body": [
      "if err := $1; err != nil {",
      "  $0",
      "}"
    ]
  },
  "Return": {
    "prefix": "r",
    "body": [
      "return "
    ]
  },
  "Return Error": {
    "prefix": "re",
    "body": [
      "return fmt.Errorf(\"$1: %w\", err)"
    ]
  },
  "Return Nil": {
    "prefix": "n",
    "body": [
      "return nil"
    ]
  },
  "Time Duration": {
    "prefix": "td",
    "body": [
      "time.Duration($0)"
    ]
  },
  "Testing TB": {
    "prefix": "tb",
    "body": [
      "t testing.TB"
    ]
  },
  "Time Now": {
    "prefix": "now",
    "body": [
      "time.Now()"
    ]
  },
  "Time Start": {
    "prefix": "st",
    "body": [
      "start := time.Now()"
    ]
  },
  "Time Since": {
    "prefix": "ts",
    "body": [
      "time.Since(${0:start})"
    ]
  },
  "Assert Equal": {
    "prefix": "ae",
    "body": [
      "assert.Equal(t, ${1:expected}, ${2:actual})"
    ]
  },
  "Assert Error Equal": {
    "prefix": "aee",
    "body": [
      "assert.EqualError(t, ${1:err}, `${0:msg}`)"
    ]
  },
  "Assert No Error": {
    "prefix": "no",
    "body": [
      "assert.NoError(t, err${1:, \"$0\"})"
    ]
  },
  "Map": {
    "prefix": "ma",
    "body": [
      "map[${1:string}]${0:value}"
    ]
  },
  "HTTP Error": {
    "prefix": "he",
    "body": [
      "http.Error(w, \"$1\", http.Status$2)"
    ]
  },
  "HTTP Handler": {
    "prefix": "ha",
    "body": [
      "w http.ResponseWriter, r *http.Request"
    ]
  },
  "Hex Dump": {
    "prefix": "hd",
    "body": [
      "fmt.Printf(\"%s\\\\n\", hex.Dump($1))"
    ]
  },
  "Tag": {
    "prefix": "tag",
    "body": [
      "`$1:\"$2\"`"
    ]
  },
  "Bytes": {
    "prefix": "b",
    "body": [
      "[]byte($1)"
    ]
  },
  "Buffer": {
    "prefix": "buf",
    "body": [
      "var buf bytes.Buffer"
    ]
  },
  "strings.Builder": {
    "prefix": "sb",
    "body": [
      "var w strings.Builder"
    ]
  },
  "Init": {
    "prefix": "init",
    "body": [
      "func init(){",
      "  $0",
      "}"
    ]
  },
  "Function": {
    "prefix": "f",
    "body": [
      "// $1 $2.",
      "func $1($3) $4 {",
      "  $0",
      "}"
    ]
  },
  "Function Anonymous": {
    "prefix": "ff",
    "body": [
      "func($1) $2 {",
      "  $0",
      "}"
    ]
  },
  "Struct": {
    "prefix": "s",
    "body": [
      "// $1 $2.",
      "type $1 struct {",
      "  $0",
      "}"
    ]
  },
  "Struct Field": {
    "prefix": "sf",
    "body": [
      "// $1 $3.",
      "${1:Name} ${2:string}"
    ]
  },
  "Hex Dump Reader": {
    "prefix": "hdr",
    "body": [
      "{",
      "  b, err := ioutil.ReadAll($0)",
      "  if err != nil {",
      "    panic(err)",
      "  }",
      "",
      "  fmt.Printf(\"%s\\\\n\", hex.Dump(b))",
      "}"
    ]
  },
  "Interface": {
    "prefix": "i",
    "body": [
      "// $1 $2.",
      "type $1 interface {",
      "  $0",
      "}"
    ]
  },
  "Lock & Unlock": {
    "prefix": "lo",
    "body": [
      "$1.Lock()",
      "defer $1.Unlock()"
    ]
  },
  "New Constructor": {
    "prefix": "ne",
    "body": [
      "// New $2.",
      "func New($3) *$1 {",
      "  return &$1{",
      "    $0",
      "  }",
      "}"
    ]
  },
  "Inspect As JSON": {
    "prefix": "ij",
    "body": [
      "{",
      "  enc := json.NewEncoder(os.Stderr)",
      "  enc.SetIndent(\"\", \"  \")",
      "  enc.Encode($0)",
      "}"
    ],
  },
  "For Range": {
    "prefix": "fr",
    "body": [
      "for _, ${1:v} := range ${2:value} {",
      "  $0",
      "}"
    ]
  },
  "For Range Chan": {
    "prefix": "frr",
    "body": [
      "for ${1:v} := range ${2:value} {",
      "  $0",
      "}"
    ]
  },
  "Config": {
    "prefix": "config",
    "body": [
      "// Config options.",
      "type Config struct {",
      "  $0",
      "}",
      "",
      "// $1 $2",
      "type $1 struct {",
      "  Config",
      "}",
      "",
      "// New $3 with the given config.",
      "func New(c Config) *$1 {",
      "  return &$1{",
      "    Config: c,",
      "  }",
      "}"
    ]
  },
  "Context-Canceled Channel Send": {
    "prefix": "cs",
    "body": [
      "select {",
      "case $1 <- $0:",
      "case <-ctx.Done():",
      " return ctx.Err()",
      "}",
    ]
  },
  "Non-blocking Channel Send": {
    "prefix": "nb",
    "body": [
      "select {",
      "case $1 <- $0:",
      "default:",
      "}",
    ]
  },
  "Benchmark Function": {
    "prefix": "bench",
    "body": [
      "// Benchmark $2.",
      "func Benchmark$1(b *testing.B) {",
      "  for i := 0; i < b.N; i++ {",
      "    $0",
      "  }",
      "}"
    ]
  },
  "Test Function": {
    "prefix": "t",
    "body": [
      "// Test $2.",
      "func Test$1(t *testing.T) {",
      "  $0",
      "}"
    ],
  },
  "Test Case": {
    "prefix": "tr",
    "body": [
      "t.Run(\"$1\", func(t *testing.T){",
      "  $0",
      "})"
    ]
  }
}
```
