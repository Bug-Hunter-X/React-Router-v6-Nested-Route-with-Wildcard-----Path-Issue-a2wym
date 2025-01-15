# React Router v6 Nested Route with Wildcard (*) Path Issue

This repository demonstrates a bug encountered when using nested routes with wildcard (*) path segments in React Router v6.  The issue involves unexpected routing behavior when a wildcard path is nested within other routes.  The provided solution offers a workaround to address this issue and provides a correct implementation.

## Bug Description

The problem arises when a route with a wildcard path segment (`/contact/*`) is nested within other routes.  This leads to incorrect route matching and potentially prevents other routes from working correctly.

## Solution

The solution demonstrates how to correctly handle nested routes and wildcard paths to avoid unexpected routing behavior. This often involves adjusting the route order or using more specific path patterns.