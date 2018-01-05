# Question 1

## Question

Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:

- Records
- Indexing

I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking." 

Cheers,
George

## Answer

Hi George,

I'd love to help!

A **Record** is a grouping of data (attributes) that belongs to a particular item or concept in your system.
For example, if you are a bookstore, you might have a list Book Records. A Book Record might look like this:

Book {
  title: '1984',
  author: 'George Orwell'
}

**Indexing** is a term used to describe the process of storing metadata in order to perform searches faster.
You can think of Indexes like a Table of Contents and Indexing like building a Table of Contents.

If you want to read more about the terms, you can find definitions in the "Vocabulary" section of this help page:
https://www.algolia.com/doc/guides/getting-started/what-is-algolia/?language=javascript#vocabulary

Custom Rankings are typically used to show more popular or higher rated items at the top of search results.
For example, a bookstore might add a Custom Ranking on the number of sales for that book.
That way, books that are sold more often will show up at the top of search results.

If you have any more questions or still need clarification, feel free to ask.

Cheers,
Nick

# Question 2

## Question

Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards,
Matt

## Answer

Hi Matt,

I'm sorry to hear that you don't like the new design. I will be sure to escalate your feedback internally.

I am not aware of any faster alternatives at the moment, but I will ask around.
In the meantime, here are some tips that will hopefully help you out:

If you give all of your records an explicit `objectID` attribute, then you will not need to clear your indexes while iterating.
Instead, you can just upload your new records and any records with the same `objectID` will be overwritten by the newly uploaded record.

Also, Algolia recommends using our REST API for interfacing with your indexes. We have libraries for many popular programming languages.
You can learn more here: https://www.algolia.com/doc/api-reference/

If you use one of our API clients then clearing and deleting your indexes is just a line of code away.

If you are interested, I can assist you with using any of our API client libraries.

Cheers,
Nick

# Question 3

## Question

Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards,
Leo

## Answer

Hi Leo,

It depends on how well-structured is your current data.
If it is already clean and structured well for search, then it may not take much time at all to get started.

Algolia has a lot of smart defaults, so you can pretty much start searching as soon as you import your data.
Alternatively, there is plenty of opportunity to configure Algolia to your needs if you have more time to invest in it.

At the top-level, the steps to get searching with Algolia set up looks something like this:

1. Create an Index in Algolia. This will host all your records (of the same type). It is recommended to create multiple indexes for different types of data.
2. Structure your data, import it into your indexes. You can import with our [API client libraries](https://www.algolia.com/doc/api-reference/) or manually with a JSON or CSV file.
3. Use one of our client-side libraries to start searching through your indexes

Algolia has really great documentation (and a [community](https://community.algolia.com/)!).
You might find some of our [tutorials](https://www.algolia.com/doc/tutorials/) helpful.

If you tell me more about your use-case, I might be able to recommend specific client-side libraries that will help you get started faster.
We have libraries that help with autocomplete, geolocation searching, infinite scrolling, and more.

If you have any further questions, please let me know. I am here to help.

Cheers,
Nick
