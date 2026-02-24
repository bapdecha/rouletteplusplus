#! /bin/sh

if [[ $# -eq 0 ]]; then
    printf "%s\n" "Usage: ./git.sh [--commit|--push|--deploy]"
    exit 1
elif [[ $# -eq 1 ]]; then 
    if [[ $1 = '--commit' ]]; then
        printf "%s\n" "Specify a path and a message"
    elif [[ $1 = '--push' ]]; then
        printf "%s\n" "Specify a branch"
    elif [[ $1 = '--deploy' ]]; then
        terraform plan
        terraform apply
        ansible-playbook -i inventory/hosts.yaml playbook.yaml
    else
        printf "%s\n" "Invalid option"
    fi
elif [[ $# -eq 2 ]]; then
    if [[ $1 = '--commit' ]]; then
        printf "%s\n" "Specify a path and a message"
        git add $2
        git commit -m "$3"
    elif [[ $1 = '--push' ]]; then
        git push origin "$2"
    elif [[ $1 = '--deploy' ]]; then
        printf "%s\n" "Expected 1 arg, 2 given"
    else
        printf "%s\n" "Invalid option"
    fi
else
    if [[ $1 = '--commit' ]]; then
        git add $2
        git commit -m "$3"
    elif [[ $1 = '--push' ]]; then
        printf "%s\n" "Expected 2 args, more given"
    elif [[ $1 = '--deploy' ]]; then
        printf "%s\n" "Expected 1 arg, more given"
    else
        printf "%s\n" "Invalid option"
    fi
fi      