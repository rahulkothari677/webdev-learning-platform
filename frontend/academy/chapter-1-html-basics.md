# Chapter 1: The Magic of HTML Tags & Attributes (HTML Level 0)

Welcome! You are completely right. We jumped straight into advanced concepts like event sensors, scroll math, and database caching before establishing the foundation. That was too fast.

From now on, we are going to hit the brakes and start from **absolute scratch**. We will build your knowledge step-by-step, making sure you fully understand and write every line yourself before we add any styling or interactivity.

---

## 1. What is HTML? (The Skeleton Metaphor)

Every website on the internet—from Google to our premium learning portal—starts as a plain text document written in **HTML** (HyperText Markup Language).

If a website were a house:
* **HTML** is the wooden frame, concrete foundation, and brick walls. It defines where the rooms, windows, and doors are.
* **CSS** is the paint, wallpaper, and lighting that makes it look beautiful.
* **JavaScript** is the electrical wiring, plumbing, and smart locks that make things work when you press a switch.

Let's focus only on the **wood and bricks (HTML)** first.

---

## 2. Anatomy of a Tag (The Sandwich Metaphor)

HTML uses **tags** to tell the web browser what kind of content it is reading. If you write plain text, the browser displays it as a single messy paragraph. Tags give it order.

Most HTML tags work like a **sandwich**: you need a top bun (opening tag), the meat (content), and a bottom bun (closing tag).

```html
<p>This is a paragraph of text.</p>
```

Let's break this down:
1. **`<p>`** is the **Opening Tag** (the start marker). It tells the browser: *"Start a paragraph here."*
2. **`This is a paragraph of text.`** is the **Content** (the text the user sees).
3. **`</p>`** is the **Closing Tag** (the end marker). The slash `/` is crucial! It tells the browser: *"Stop the paragraph here."*

### Commonly Used Tags:
* **`<h1>` to `<h6>`** (Headers): Used for titles. `<h1>` is the largest, most important title on the page, and `<h6>` is the smallest.
* **`<p>`** (Paragraph): Used for standard body text.
* **`<a>`** (Anchor Link): Used to create clickable links.
* **`<ul>` and `<li>`** (Lists): `<ul>` starts an **Unordered List** (bullet points), and each `<li>` represents a **List Item** inside it.

---

## 3. What are Attributes? (The Label Metaphor)

Sometimes, a tag needs extra information to work. For example, if you tell the browser to make a clickable link with `<a>`, the browser needs to know: *"Where should this link take the user?"*

We provide this extra information using **Attributes**. An attribute sits inside the opening tag and looks like a label.

Let's look at a link tag:
```html
<a href="https://google.com">Go to Google</a>
```

Let's break this down:
1. **`<a>`** is the opening anchor tag.
2. **`href="https://google.com"`** is the **Attribute**.
   * **`href`** stands for *Hypertext Reference* (the URL address).
   * **`="https://google.com"`** defines the value of that address.
3. **`Go to Google`** is what the user clicks.
4. **`</a>`** closes the tag.

### Another Example: Images
To show an image, we use the `<img>` tag. An image doesn't have any text content, so it doesn't need a closing tag (we call this a *self-closing* tag). It only needs attributes:

```html
<img src="logo.png" alt="My Website Logo">
```
* **`src`** (Source): The filename or URL of the image file.
* **`alt`** (Alternative Text): A description of the image for blind readers or if the image fails to load.

---

## 4. Block-Level vs. Inline Elements

This is a key concept that determines how elements layout on a screen.

### Block-Level Elements (The Boxes)
A block-level element acts like a large brick or box. It starts on a new line and stretches across the entire width of the page, pushing everything else below it.
* Examples: `<h1>`, `<p>`, `<ul>`, `<li>`.
* *Analogy:* If you place two `<p>` tags on a page, they stack vertically like bricks.

### Inline Elements (The Text Toppings)
An inline element does not start on a new line. It sits directly inside the text flow, taking up only as much width as its content needs.
* Examples: `<a>` (links), `<strong>` (bold text).
* *Analogy:* If you put a link `<a>` inside a paragraph, it sits next to the regular words without breaking the line.

---

## 5. Coding Practice: Build Your First Page

Let's write a simple HTML page yourself. Follow these steps:

1. Create a new text file named `my_practice.html` in your directory.
2. Copy and paste the following basic template into it:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Practice Page</title>
</head>
<body>

  <h1>Welcome to my learning journey!</h1>
  <p>I am starting from the absolute basics of HTML. Here is what I am learning:</p>

  <ul>
    <li>How tags wrap content like a sandwich.</li>
    <li>How attributes add extra settings to tags.</li>
    <li>How links point to websites using the href attribute.</li>
  </ul>

  <p>For more practice, you can visit <a href="https://wikipedia.org">Wikipedia</a>.</p>

</body>
</html>
```

3. Double-click the `my_practice.html` file to open it in your browser and check how it renders!

---

## 6. Simple Check-In Questions

To make sure we are aligned and moving at the right speed, try answering these simple questions:

1. Look at this tag: `<a href="contact.html">Contact Us</a>`. 
   * What is the opening tag?
   * What is the attribute name?
   * What is the attribute value?
2. If you write two headers like this:
   ```html
   <h1>Title 1</h1>
   <h2>Title 2</h2>
   ```
   Will "Title 2" appear next to "Title 1" or below it? Why?

Once you answer these or confirm you understand, we will write our next chapter: **Level 0 CSS (Coloring, Fonts, and Sizing)**. Take your time!
