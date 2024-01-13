class Endpoint 
    def get_users
        query ="SELECT id,name,username,email.number,web from users;"
        ActiverRecord::base_connection{username:'root',password:'test123',db_name:'clase_1161'}
        user_results = ActiverRecord::base_connection(query)
        render json:{user:user_results}
    end
end

    def create
        if validate_email_format(params[:email])
            render json:{error:"usuario creador"}
            user=User.new(params)
            user.save
        else

        render json:{error:"correco incorreto"}
    end
    def validate_email_format(email)
        return false if email.contains?("*$%&")
        return true
    end
end