FROM node:12.10.0

RUN addgroup --gid 2000 --system appgroup
RUN adduser --uid 2000 --system appuser --gid 2000

COPY --chown=appuser:appgroup . .

RUN npm install

EXPOSE 3000

USER 2000

CMD npm start