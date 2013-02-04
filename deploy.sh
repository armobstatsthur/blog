jekyll
cp -r appengine/* _site/.
sh $APPENGINE_SDK_HOME/bin/appcfg.sh --enable_jar_splitting update _site/
