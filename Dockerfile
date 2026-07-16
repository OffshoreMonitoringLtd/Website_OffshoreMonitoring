# Static Offshore Monitoring site served by nginx
FROM nginx:1.27-alpine

# Remove default content
RUN rm -rf /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html styles.css app.js design_reference.html /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/

# Non-root-friendly permissions for static files
RUN chown -R nginx:nginx /usr/share/nginx/html \
  && chmod -R a+rX /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1

CMD ["nginx", "-g", "daemon off;"]
