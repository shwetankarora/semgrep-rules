## Introduction

This is a collation of Semgrep rules across multiple languages along with their test cases. The idea is to write new rules or improve existing rules in order to have less false positives while doing SAST scanning in general.

## How to write rules

Follow this link: https://semgrep.dev/docs/writing-rules/rule-syntax/

## Where to add rules

_**TL;DR**: In `semgrep/rules` directory_

- Create a directory inside `semgrep/rules`. The name of the directory should be the name of the programming language.
- Create `.yaml` file inside the newly created directory
- The name of the rule should be the name of the `.yaml` file

**Note**: The rules of javascript and typescript are clubbed into one folder named `targets/javascript`

## Where to add test cases for rules

_**TL;DR**: In `semgrep/targets` directory_

- Create a directory inside `semgrep/rules`. The name of the directory should be the name of the programming language.
- Create the test file inside the newly created directory. The extension of the test file is the extension of the source files of programming language. e.g., for javascript it is `.js`
- The name of the rule should be the name of the test file.

**Note**: The test cases of javascript and typescript are clubbed into one folder named `targets/javascript`

## How to run your rule locally

- Run the command `semgrep --config <your_rule_file>.yaml <dir or soruce file>`

where `<dir or source file>` is a directory of files on which to run the rules or a single file. e.g., for javascript it will be a directory of all `.js` files or a single `.js` file

Follow this link for more details: https://semgrep.dev/docs/running-rules/

## How to test rules locally

- Go to the folder `semgrep`
- Run the command `semgrep --test --config rules targets`

All good if the following output is presented:

```
1/1: ✓ All tests passed
No tests for fixes found.
```
Follow this link for more details: https://semgrep.dev/docs/writing-rules/testing-rules/

## Very important note

- Don't forget to install semgrep locally to run or test your rules. Here's the link - https://semgrep.dev/docs/getting-started/
- Writing test cases is important

Happy coding :)
