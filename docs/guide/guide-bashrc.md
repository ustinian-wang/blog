```shell
# git start
alias ga="git add ."
alias gs="git status"
alias gp="git pull"
alias gps="git push"
alias gd="git diff"
alias gas="git add . && git stash save"
alias gss="git stash save"
alias gsp="git stash pop"
# git start

# faisco start
FAISCO_APP_PATH="/d/software/faiscoApp"
alias ma-fe="cd $FAISCO_APP_PATH/res/mallfrontend"
alias ma-base="cd $FAISCO_APP_PATH/res/mallfrontend/packages/faicomponent-base"
alias ma-kit="cd $FAISCO_APP_PATH/res/mallfrontend/packages/kit"
alias ma-eslint="cd $FAISCO_APP_PATH/res/mallfrontend/packages/eslint-plugin-ma-rules"
alias ma-docs="cd $FAISCO_APP_PATH/docs"
alias site-res="cd $FAISCO_APP_PATH/res/mallsite-res"
alias allsite-res="cd $FAISCO_APP_PATH/res/mallallsite-res"
alias helper-res="cd $FAISCO_APP_PATH/res/mallhelper-res"
alias mobi-res="cd $FAISCO_APP_PATH/res/mallmobi/v2"
alias mallapp-res="cd $FAISCO_APP_PATH/res/mallapp"
alias mobi-deploy="mobi-res && yarn deploy"
# faisco end

# other start
alias sbc="source ~/.bashrc"
alias vbs="vim ~/.bashrc"
# other end

```