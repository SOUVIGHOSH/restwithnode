## what is rest

Rest stands for Representational state transfer, here we transfer data stateless without UI, we do not render view in rest.

## why use JSON in rest api

the available data formats are HTML (data + structure) , text (data) , xml (data +structure), JSON(data).JSON has no UI assumption embeded similar to text,xml, it is easy to parse unlike text and it is concise unlike xml, so JSON is the most popular choice.

## what is the differnece between browser api and rest api

in Browser we use link in form submit, but browser can only use / know GET & POST , with rest we can use GET, post,put, delete,patch

## what is differnece between put,patch and post

post creates a resource, put updates that resource, patch updates parts of exisiting resource

## what is options request type

this is an automatic request which determines whether follow up request is allowed.

## what are principles of REST

1. Uniform Interface: clearly defined API endpoints with clear request & response structure
2. Steteless Interaction: server and client don't store any connection history, every request handled separately
