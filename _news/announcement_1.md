---
layout: post
title: Why Azure B2C ROPC Custom Flows Are Inherently Insecure
date: 2023-11-28 12:00:00-0500
inline: false
related_posts: false
---

Microsoft’s Azure Active Directory B2C service allows cloud administrators to define custom policies, which orchestrates trust between principals using standard authentication protocols. One such custom policy that B2C defines by default is the Resource Owner Password Credentials (ROPC) flow, which implements the OAuth standard authentication flow of the same name and allows users to simply supply their credentials to the authorization server in order to obtain a valid access token.

However, both the Internet-Draft and the Microsoft documentation are only concerned with how the _authentication_ process may be impacted (i.e., they recommend against using ROPC flow as it exposes user credentials to the client) and do not consider how the _authorization_ process is impacted. This could leave cloud administrators under-informed when weighing the risks of implementing an ROPC flow and unintentionally exposing their applications to unauthorized attacks if they ultimately deploy the default B2C ROPC flow.

Read more [here](https://www.praetorian.com/blog/why-azure-b2c-ropc-custom-flows-are-inherently-insecure/)
