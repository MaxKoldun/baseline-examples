FROM adminer:latest

USER root

RUN echo "upload_max_filesize = 3G" >> /usr/local/etc/php/conf.d/0-upload_large_dumps.ini \
    && echo "post_max_size = 3G"       >> /usr/local/etc/php/conf.d/0-upload_large_dumps.ini \
    && echo "memory_limit = 2G"           >> /usr/local/etc/php/conf.d/0-upload_large_dumps.ini \
    && echo "max_execution_time = 600"      >> /usr/local/etc/php/conf.d/0-upload_large_dumps.ini

USER adminer

EXPOSE 8080
