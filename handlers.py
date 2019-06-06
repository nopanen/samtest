def get_data_handler(event, context):
    message = 'Hello {}!'.format(event['name'])    
    return { 
        'message' : message
    }

def post_data_handler(event, context):
    message = 'Hello {}!'.format(event['name'])    
    return { 
        'message' : message
    }

def delete_tables_handler(event, context):
    message = 'Hello {}!'.format(event['name'])    
    return { 
        'message' : message
    }

def stats_handler(event, context):
    message = 'Hello {}!'.format(event['name'])    
    return { 
        'message' : message
    }