---
layout: post
title: Azure RBAC Privilege Escalations - Azure VM
date: 2025-02-15 12:00:00-0500
inline: false
related_posts: false
---

Microsoft Azure provides administrators with controls to limit the actions a principal can take within the cloud environment. These actions can broadly be split into two categories: those that impact the Entra ID tenant and those that affect the Azure cloud subscription, the latter of which I will call “RBAC actions.” Prior research into Entra ID actions has identified particular roles and permissions that may allow an Entra ID principal to [abuse its assigned permissions to gain control over the Entra ID tenant](https://github.com/SpecterOps/AzureHound). In this blog post, I discuss four different ways an Azure RBAC principal can abuse an Azure VM to gain control over an Azure subscription:

1. Execute commands on an Azure VM associated with an administrative managed identity
2. Log in to an Azure VM associated with an administrative managed identity
3. Attach an administrative managed identity to an existing Azure VM and execute commands in that VM
4. Create a new Azure VM, attach an administrative managed identity to it, and execute commands in that VM by using data plane actions


Read more [here](https://www.praetorian.com/blog/azure-rbac-privilege-escalations-azure-vm/)
