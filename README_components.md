# Components

This is a list of all components available to use on the home page and cases pages, along with their props.

## Home Page

### Announcements

Wraps the Announcements section.

```
<Announcements>
    ...
</Announcements>
```

### Announcement

A single announcement.

```
<Announcement
    title="Location goes here"
    date="Date goes here"
    image="Image name goes here"
    featured
>
    Full announcement text goes here.
</Announcement>
```

### Case

A single case.

```
<Case
    name="Case name goes here"
    location="Case location goes here"
    page="Name of page to link to goes here"
    image="Name of image goes here"
/>
```

### CasesSection

Wraps the Cases section.

```
<Cases>
    ...
</Cases>
```

### FeaturedCase

The featured case.

```
<CasesSection.FeaturedCase
    name="Headline goes here"
    page="Name of page to link to goes here"
    video="YouTube of Facebook embed link goes here
    videoRatio="Video ratio goes here (usually 1x1 or 16x9)"
>
    <p>A paragraph about the case goes here</p>
    <p>Feel free to add multiple paragraphs as needed</p>
</CasesSection.FeaturedCase>
```

### Letter

The letter and petition element.

```
<Letter />
```

### MastHead

The header image and buttons.

```
<MastHead
    image="Name of image goes here"
    takeActionPage="Name of page to link to goes here (optional)"
/>
```

## Case Pages

### Article

A single press article.

```
<Article
    href="The full url to the article"
    iFramelyUrl="The iframely embed url, starting w/ https"
/>
```

### Bio

An individual person's (a defendant or a lawyer) bio.

```
<Bio
    name="Name goes here"
    image="Image name goes here"
    circle
>
    Bio text goes here.
</Bio>
```

### Defendants

Wraps the Defendants section.

```
<Defendants>
    ...
</Defendants>
```

### Details

Case details.

```
<Details image="Name of image goes here (optional)">
    Full text goes here.
</Details>
```

### Header

Header for Case pages.

```
<Header
    title="Name of case goes here"
    location="Location of case goes here"
    video="YouTube of Facebook embed link goes here
    videoRatio="Video ratio goes here (usually 1x1 or 16x9)"
    ctaText1="Text to display on 1st Call to Action button (optional)"
    ctaLink1="Link for 1st CTA button (optional)"
    ctaText2="Text to display on 2nd CTA button (optional)"
    ctaLink2="Link for 2nd CTA button (optional)"
>
    Text to display under the "Take Action" header goes here (optional).
</Header>
```

### Lawyers

Wraps the Lawyers section.

```
<Lawyers>
    ...
</Lawyers>
```

### Press

Wraps the Press section.

```
<Press>
    ...
</Press>
```
