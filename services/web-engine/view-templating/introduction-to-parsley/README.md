---
description: Learn the basics of Zesty.io's templating language Parsley.
---

# Parsley

#### Whitespace

White space does not matter within double quotes but can't be used within single quotes.

#### Comparisons

Use double equals `==` in `if` statements and single equals everywhere else.

#### Quotes

Do not use quotes in `if` statements. Only use quotes around hard coded strings and single bracket parsley variables everywhere else.

#### Conjunctions

Use `&&` and `||` in `if` statements, and `and` and `or` everywhere else.

#### Brackets

Use double brackets `{{` to start a Parsley statement, use single brackets `{ }` within a Parsley call. You cannot make a Parsley statement within a Parsley statement within a Parsley statement.

#### Comments

Use `(**` to start and `**)` to end comments that will not render in the output of the website.

