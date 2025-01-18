```shell
# git start
alias ga="git add ."
alias gs="git status"
alias gp="git pull"
alias gps="git push"
alias gpp="git pull && git push"
alias gd="git diff"
alias gas="git add . && git stash save"
alias gss="git stash save"
alias gsp="git stash pop"
# git start

# env start
FAISCO_APP_PATH="/d/software/faiscoApp"
GIT_REPO_SITE_RES="https://github.com/ustinian-wang/mallsite-res.git"
GIT_REPO_MOBI_RES="https://github.com/ustinian-wang/mallmobi-res.git"
GIT_REPO_HELPER_RES="https://github.com/ustinian-wang/mallhelper-res.git"
GIT_REPO_MALLAPP_RES="https://github.com/ustinian-wang/mallapp-res.git"
GIT_REPO_ALLSITE_RES="https://github.com/ustinian-wang/mallallsite-res.git"
# env end

# faisco start
alias ma-fe="cd $FAISCO_APP_PATH/res/mallfrontend"
alias ma-base="cd $FAISCO_APP_PATH/res/mallfrontend/packages/faicomponent-base"
alias ma-kit="cd $FAISCO_APP_PATH/res/mallfrontend/packages/kit"
alias ma-eslint="cd $FAISCO_APP_PATH/res/mallfrontend/packages/eslint-plugin-ma-rules"
alias ma-docs="cd $FAISCO_APP_PATH/docs"
alias site-res="cd $FAISCO_APP_PATH/res/mallsite-res/js"
alias site-rebuild="cd $FAISCO_APP_PATH/res/mallsite-res/js && yarn build"
alias allsite-res="cd $FAISCO_APP_PATH/res/mallallsite-res"
alias helper-res="cd $FAISCO_APP_PATH/res/mallhelper-res"
alias mobi-res="cd $FAISCO_APP_PATH/res/mallmobi-res/v2"
alias mallapp-res="cd $FAISCO_APP_PATH/res/mallapp-res"
alias uniapp-res="cd $FAISCO_APP_PATH/res/malluniapp-res"
alias xcx-dev-upload="uniapp-res && yarn xcx-dev-upload"
alias xcx-dep-upload="uniapp-res && yarn xcx-dep-upload"
alias mobi-deploy="mobi-res && yarn deploy"
alias npm-repo="npm config set registry https://registry.npmmirror.com"
alias yarn-repo="yarn config set registry https://registry.yarnpkg.com"
alias fnpm-repo="npm config set registry https://registry.npmmirror.com"
alias fyarn-repo="yarn config set registry https://registry.yarnpkg.com"

# faisco end

# other start
alias sbs="source ~/.bashrc"
alias vbs="vim ~/.bashrc"
# other end

alias wcbot-jser="wcbot jser-key $1"
alias wcbot-test="wcbot test-key $1"
alias wcbot-msg="wcbot msg-key $1"

function pkg-up() {
    if [ -z "$1" ] || [ -z "$2" ]; then
        echo "Usage: pkg_up <project_path> <package_name>"
        return 1
    fi

    local project_path=$1
    local package_name=$2
    if [ "$project_path" == "all" ]; then
        echo "all"
        pkg-up site-res $package_name;
        pkg-up mobi-res $package_name;
        pkg-up helper-res $package_name;
        pkg-up mallapp-res $package_name;
        pkg-up allsite-res $package_name;
    elif [ "$project_path" == "site-res" ]; then
        echo "site-res"
        site-res && npm install $package_name;
    elif [ "$project_path" == "mobi-res" ]; then
        echo "mobi-res"
        mobi-res && yarn upgrade $package_name;
    elif [ "$project_path" == "helper-res" ]; then
        echo "helper-res"
        helper-res && yarn upgrade $package_name;
    elif [ "$project_path" == "mallapp-res" ]; then
        echo "mallapp-res"
        mallapp-res && yarn upgrade $package_name;
    elif [ "$project_path" == "allsite-res" ]; then 
        echo "allsite-res"
        allsite-res && npm install $package_name;
    fi
}


function wcbot(){
    local webhook_key="$1"
    local message="$2"

    # 检查参数是否为空
    if [ -z "$webhook_key" ]; then
        echo "wcbot: <webhook_key> <message>"
        return 1
    fi

    if [ -z "$message" ]; then
        echo "wcbot: $1 <message>"
        return 1
    fi

    # 企业微信机器人 Webhook URL
    local webhook_url="https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=${webhook_key}"

    # 发送消息
    curl -X POST "${webhook_url}" \
       -H 'Content-Type: application/json' \
       -d '{
            "msgtype": "text",
            "text": {
                "content": "'"${message}"'"
            }
        }'

    echo "Message sent: ${message}"
}
```
