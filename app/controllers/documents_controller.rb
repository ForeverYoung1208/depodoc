class DocumentsController < ApplicationController
  before_action :set_document, only: [:show, :edit, :update, :destroy]

  # GET /documentsApp
  def documensApp
    @documents = Document.all
  end

  
  # GET /documents
  # GET /documents.json
  def index
    @documents = Document.all
  end

  # GET /documents/1
  # GET /documents/1.json
  def show
  end

  # GET /documents/new
  def new
    @document = Document.new
    # @document.creator_id = @current_user.id
    # @document.creator_name = @current_user.name + "(id: #{@current_user.id})"
  end

  # GET /documents/1/edit
  def edit
  end

  # POST /documents
  # POST /documents.json

  def create
    document_params_with_creator = document_params.merge({
      creator_id: @current_user.id,
      creator_name: "#{@current_user.name} (id: #{@current_user.id})"
    })
    @document = Document.new(document_params_with_creator)
    new_docstate = Docstate.find(params[:document][:docstate_id])
    docstate_change = DocstateChange.new(
      {
        document: @document,
        from_state: new_docstate,
        to_state: new_docstate,
        user_id: @current_user.id
      }
    )
    respond_to do |format|
      if @document.save! && docstate_change.save!
        format.html { redirect_to @document, notice: 'Document was successfully created.' }
        format.json { render :show, status: :created, location: @document }
      else
        format.html { render :new }
        format.json { render json: @document.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /documents/1
  # PATCH/PUT /documents/1.json
  def update
    respond_to do |format|
      if @document.update(document_params)
        format.html { redirect_to @document, notice: 'Document was successfully updated.' }
        format.json { render :show, status: :ok, location: @document }
      else
        format.html { render :edit }
        format.json { render json: @document.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /documents/1
  # DELETE /documents/1.json
  # def destroy
  #   @document.destroy
  #   respond_to do |format|
  #     format.html { redirect_to documents_url, notice: 'Document was successfully destroyed.' }
  #     format.json { head :no_content }
  #   end
  # end

  def destroy
    # @document.destroy
    if @document.update(deleted_at: DateTime.now)
      respond_to do |format|
        format.html { redirect_to documents_url, notice: 'document was marked as deleted.' }
        format.json { head :no_content }
      end
    else
      format.html { redirect_to documents_url, notice: 'error deleting document.' }
      format.json { render json: @document.errors, status: :unprocessable_entity }
    end
  end


  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_document
      @document = Document.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def document_params
      params.require(:document).permit(:name, :face_id, :note, :doctype_id)
    end
end
